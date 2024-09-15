import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const HotelBookingConfirmation = dynamic(() => import('@/src/screens/Hotels/BookingConfirmation'));

export default function HotelBookingConfirmationPage() {
    return (
        <Layout>
            <HotelBookingConfirmation />
        </Layout>
    )
}