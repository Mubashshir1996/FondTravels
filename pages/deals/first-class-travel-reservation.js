import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FirstClassFlightReservation = dynamic(() => import('@/src/screens/FirstClassFlightReservation'));

export default function FirstClassFlightReservationPage({ clientReviewData }) {
  return (
    <Layout>
      <FirstClassFlightReservation clientReviewData={clientReviewData} />
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