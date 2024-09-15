import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const BereavementFlightFares = dynamic(() => import('@/src/screens/BereavementFlightFares'));

export default function BereavementFlightFaresPage({ clientReviewData }) {
  return (
    <Layout>
      <BereavementFlightFares clientReviewData={clientReviewData} />
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