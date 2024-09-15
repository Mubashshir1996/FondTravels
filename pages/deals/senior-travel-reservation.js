import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const SeniorTravelReservation = dynamic(() => import('@/src/screens/SeniorTravelReservation'));

export default function SeniorTravelReservationPage({ clientReviewData }) {
  return (
    <Layout>
      <SeniorTravelReservation clientReviewData={clientReviewData} />
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