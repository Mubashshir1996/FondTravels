import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToPune = dynamic(() => import('@/src/screens/FlightsToPune'));

export default function FlightsToPunePage({ clientReviewData }) {
    return (
        <Layout>
            <FlightsToPune clientReviewData={clientReviewData} />
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