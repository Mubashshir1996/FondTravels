import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const FlightsToHyderabad = dynamic(() => import('@/src/screens/FlightsToHyderabad'));

export default function FlightsToHyderabadPage({ clientReviewData }) {
    return (
        <Layout>
            <FlightsToHyderabad clientReviewData={clientReviewData} />
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