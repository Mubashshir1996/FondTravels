import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const InternationalTravelReservation = dynamic(() => import('@/src/screens/InternationalTravelReservation'));

export default function InternationalTravelReservationPage({ clientReviewData }) {
  return (
    <Layout>
      <InternationalTravelReservation clientReviewData={clientReviewData} />
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