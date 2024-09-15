import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const BusinessClassTravelReservation = dynamic(() => import('@/src/screens/BusinessClassTravelReservation'));

export default function BusinessClassTravelReservationPage({ clientReviewData }) {
  return (
    <Layout>
      <BusinessClassTravelReservation clientReviewData={clientReviewData} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      clientReviewData: clientReviewData
    }
  };
}