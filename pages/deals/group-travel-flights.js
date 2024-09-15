import Layout from '@/src/components/Layout'
import { clientReviewData } from '@/src/helpers/ClientReview';
import dynamic from 'next/dynamic';

const GroupTravelFlightsReservations = dynamic(() => import('@/src/screens/GroupTravelFlightsReservations'));

export default function GroupTravelFlightsReservationsPage({ clientReviewData }) {
    return (
        <Layout>
            <GroupTravelFlightsReservations clientReviewData={clientReviewData} />
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