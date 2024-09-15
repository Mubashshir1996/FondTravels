import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToGoa = dynamic(() => import('@/src/screens/FlightsToGoa'));

export default function FlightsToGoaPage({ clientReviewData }) {
  return (
    <Layout>
      <FlightsToGoa clientReviewData={clientReviewData} />
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