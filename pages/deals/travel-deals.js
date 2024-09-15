import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const TravelDeals = dynamic(() => import('@/src/screens/TravelDeals'));

export default function TravelDealsPage({ clientReviewData }) {
    return (
        <Layout>
            <TravelDeals clientReviewData={clientReviewData} />
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