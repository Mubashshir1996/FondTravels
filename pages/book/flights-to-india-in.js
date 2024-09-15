import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const TravelsToIndia = dynamic(() => import('@/src/screens/TravelsToIndia'));

export default function TravelsToIndiaPage({ clientReviewData }) {
    return (
        <Layout>
            <TravelsToIndia clientReviewData={clientReviewData} />
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