import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const BusRental = dynamic(() => import('@/src/screens/Bus'));

export default function BusesPage({ clientReviewData }) {
  return (
    <Layout>
      <BusRental clientReviewData={clientReviewData} />
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