import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToDelhi = dynamic(() => import('@/src/screens/FlightsToDelhi'));

export default function FlightsToDelhiPage({ clientReviewData }) {
  return (
    <Layout>
      <FlightsToDelhi clientReviewData={clientReviewData} />
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