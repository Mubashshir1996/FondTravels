import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import { CanadaHotels, IndonesiaHotels, UnitedArabHotels, UnitedKingdomHotels, UnitedStateHotels } from '@/src/helpers/Hotels/HotelListing';
import { hotelFaqs } from '@/src/helpers/Hotels/faq';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Hotels = dynamic(() => import('@/src/screens/Hotels'));

export default function HotelsPage({ IndonesiaHotels, UnitedArabHotels, UnitedKingdomHotels, CanadaHotels, UnitedStateHotels, hotelDeals, clientReviewData, hotelFaqs }) {
  return (
    <Layout>
      <Hotels IndonesiaHotels={IndonesiaHotels} UnitedArabHotels={UnitedArabHotels} UnitedKingdomHotels={UnitedKingdomHotels} UnitedStateHotels={UnitedStateHotels} CanadaHotels={CanadaHotels} hotelDeals={hotelDeals} clientReviewData={clientReviewData} hotelFaqs={hotelFaqs} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${BASE_URL}${API.HotelDeals}`);
    const hotelDeals = res?.data || [];

    return {
      props: {
        hotelDeals,
        UnitedStateHotels,
        CanadaHotels,
        UnitedKingdomHotels,
        UnitedArabHotels,
        IndonesiaHotels,
        clientReviewData,
        hotelFaqs
      }
    };
  } catch (error) {
    console.error('Error fetching hotel deals data:', error.message);
  }
}