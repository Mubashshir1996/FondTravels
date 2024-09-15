import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToMumbai = dynamic(() => import('@/src/screens/FlightsToMumbai'));

export default function FlightsToMumbaiPage({ clientReviewData }) {
  return (
    <Layout>
      <FlightsToMumbai clientReviewData={clientReviewData} />
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