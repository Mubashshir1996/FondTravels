import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const Car = dynamic(() => import('@/src/screens/Car'));

export default function CarsPage({ clientReviewData }) {
  return (
    <Layout>
      <Car clientReviewData={clientReviewData} />
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