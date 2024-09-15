import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const OnlineTravelAgency = dynamic(() => import('@/src/screens/OnlineTravelAgency'));

export default function OnlineTravelAgencyPage({ clientReviewData }) {
  return (
    <Layout>
      <OnlineTravelAgency clientReviewData={clientReviewData} />
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