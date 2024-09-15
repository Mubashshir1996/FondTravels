import dynamic from 'next/dynamic';
import Layout from '@/src/components/Layout';
import { FlightPageData, FlightsFaqsData } from '@/src/helpers/Flights';
import { clientReviewData } from '@/src/helpers/ClientReview';

const Flights = dynamic(() => import('@/src/screens/Flights'));

export default function FlightsPage({ faq, flightData, clientReviewData }) {
  return (
    <Layout>
      <Flights faq={faq} flightData={flightData} clientReviewData={clientReviewData} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      faq: FlightsFaqsData,
      flightData: FlightPageData,
      clientReviewData: clientReviewData
    }
  };
}
