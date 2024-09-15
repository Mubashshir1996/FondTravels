import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const HotelPaymentDecline = dynamic(() => import('@/src/screens/Hotels/PaymentDecline'));

export default function HotelPaymentDeclinePage() {
    return (
        <Layout>
            <HotelPaymentDecline />
        </Layout>
    )
}