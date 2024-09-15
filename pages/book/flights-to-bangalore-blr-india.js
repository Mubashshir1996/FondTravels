import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToBangalore = dynamic(() => import('@/src/screens/FlightsToBangalore'));

export default function FlightsToBangalorePage({ clientReviewData }) {
  return (
    <Layout>
      <FlightsToBangalore clientReviewData={clientReviewData} />
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