import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const UnaccompaniedMinorFlights = dynamic(() => import('@/src/screens/UnaccompaniedMinorFlights'));

export default function UnaccompaniedMinorFlightsPage({ clientReviewData }) {
  return (
    <Layout>
      <UnaccompaniedMinorFlights clientReviewData={clientReviewData} />
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