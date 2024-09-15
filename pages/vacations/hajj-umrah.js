import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview'
import dynamic from 'next/dynamic';

const HajjUmrah = dynamic(() => import('@/src/screens/HajjUmrah'));

export default function HajjUmrahPage({ clientReviewData }) {
  return (
    <Layout>
      <HajjUmrah clientReviewData={clientReviewData} />
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