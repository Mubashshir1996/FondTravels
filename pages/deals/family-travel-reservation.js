import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FamilyTravelReservation = dynamic(() => import('@/src/screens/FamilyTravelReservation'));

export default function FamilyTravelReservationPage({ clientReviewData }) {
  return (
    <Layout>
      <FamilyTravelReservation clientReviewData={clientReviewData} />
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