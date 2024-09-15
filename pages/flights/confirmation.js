import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const BookingConfirmation = dynamic(() => import('@/src/screens/FlightBookingConfirmation'));

export default function BookingConfirmationPage() {
    return (
        <Layout>
            <BookingConfirmation />
        </Layout>
    )
}