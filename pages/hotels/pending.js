import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const HotelBookingPending = dynamic(() => import('@/src/screens/Hotels/PendingBooking'));

export default function HotelBookingPendingPage() {
    return (
        <Layout>
            <HotelBookingPending />
        </Layout>
    )
}