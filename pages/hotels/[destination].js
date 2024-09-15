import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout';
import SEOHotel from '@/src/components/SEOMeta/seoHotel';
import { setHotelAvailability, setHotelList, setHotelSearchData, setHotelStaticData } from '@/src/redux/action';
import axios from 'axios';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HotelListing = dynamic(() => import('@/src/screens/Hotels/HotelListing'));

export default function HotelSearch({ destination }) {
  const dispatch = useDispatch();
  const hotelFormData = useSelector((state) => state.hotelSearchData);
  const getHotelStatic = useSelector((state) => state.getHotelStatic);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    const storedData = localStorage.getItem('hotelFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData) {
        dispatch(setHotelSearchData({
          ...parsedData,
          checkIn: [
            parsedData?.checkIn[0] ? dayjs(parsedData.checkIn[0]) : null,
            parsedData?.checkIn[1] ? dayjs(parsedData.checkIn[1]) : null,
          ],
        }));
      }
    }

    const hotelStaticData = localStorage.getItem('getHotelStatic');
    if (hotelStaticData) {
      const parsedData = JSON.parse(hotelStaticData);
      if (parsedData) {
        dispatch(setHotelStaticData({ ...parsedData }))
      }
    }
  }, []);

  useEffect(() => {
    if (isLoading && window.innerWidth <= 767) {
      setCollapsed(false);
    }
  }, [isLoading]);

  const searchHotels = useCallback(() => {
    setIsLoading(true);
    setErrorMessage(null);
    dispatch(setHotelList([]));

    const today = dayjs();
    const checkInDateStatic = today.add(15, 'day').format('YYYY-MM-DD');
    const checkOutDateStatic = today.add(16, 'day').format('YYYY-MM-DD');

    const checkInDate = hotelFormData?.checkIn ? dayjs(hotelFormData.checkIn[0]).format('YYYY-MM-DD') : null;
    const checkOutDate = hotelFormData?.checkIn ? dayjs(hotelFormData.checkIn[1]).format('YYYY-MM-DD') : null;

    let requestData;

    if (getHotelStatic?.length !== 0 && hotelFormData.length === 0) {
      requestData = {
        HotelIds: [],
        CityIds: [getHotelStatic?.[0]?.selectedCityId?.Id],
        CheckInDate: checkInDateStatic,
        CheckOutDate: checkOutDateStatic,
        Rooms: [
          {
            "NumAdults": 1,
          }
        ],
        Nationality: "US",
      };
    } else if (hotelFormData && hotelFormData?.length !== 0 && getHotelStatic?.length === 0) {
      requestData = {
        HotelIds: [],
        CityIds: [hotelFormData?.selectedCityId?.Id],
        CheckInDate: checkInDate,
        CheckOutDate: checkOutDate,
        Rooms: hotelFormData?.rooms?.map((room) => ({
          NumAdults: room.adults,
          Children: room.childAge?.map((childAge) => parseInt(childAge, 10)),
        })),
        Nationality: hotelFormData?.country,
      };
    }

    axios({
      method: 'post',
      url: `${BASE_URL}${API.HotelsList}`,
      data: requestData,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(setHotelAvailability([]));
          localStorage.removeItem("hotelAvailability");
          dispatch(setHotelList(res.data));
          localStorage.setItem('hotelSearchData', JSON.stringify(res.data));
          setIsLoading(false);
          setErrorMessage('');
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
  }, [hotelFormData, getHotelStatic, dispatch]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      searchHotels();
    }
  }, [hotelFormData, searchHotels]);

  return (
    <Layout>
      <SEOHotel destination={destination} />
      <HotelListing isLoading={isLoading} setIsLoading={setIsLoading} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setCollapsed={setCollapsed} collapsed={collapsed} destination={destination} initialized={initialized} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { destination } = context.query;

  return {
    props: {
      destination,
    },
  };
};