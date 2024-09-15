import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout';
import SEOHotelDetails from '@/src/components/SEOMeta/seoHotelDetail';
import { setHotelDetails } from '@/src/redux/action';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const HotelDetailPage = dynamic(() => import('@/src/screens/Hotels/HotelDetailPage'));

const HotelDetails = ({ hotelDetailsDataProps }) => {
    const dispatch = useDispatch();
    const [dtlPage, setDtlPage] = useState(false);

    useEffect(() => {
        setDtlPage(true);
    }, [hotelDetailsDataProps]);

    useEffect(() => {
        if (hotelDetailsDataProps) {
            dispatch(setHotelDetails(hotelDetailsDataProps));
            localStorage.setItem('hotelDetailsRoomData', JSON.stringify(hotelDetailsDataProps));
        }
    }, [hotelDetailsDataProps]);

    return (
        <Layout>
            <SEOHotelDetails hotelDetailsDataProps={hotelDetailsDataProps} />
            <HotelDetailPage hotelDetailsDataProps={hotelDetailsDataProps} dtlPage={dtlPage} />
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const { destination, URL } = context.query;

    try {
        const res = await axios.get(`${BASE_URL}${API.HotelDetailsUrl}${destination}&hotel=${URL}`);
        const detailsDataValue = res.data;
        if (res.status !== 200 || res.data?.Hotels?.Images?.length === 0) {
            return { notFound: true };
        }
        return {
            props: {
                hotelDetailsDataProps: detailsDataValue,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true,
        };
    }
};

export default HotelDetails;