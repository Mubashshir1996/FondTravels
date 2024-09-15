import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const Summary = dynamic(() => import('@/src/screens/Summary'));

export default function PaymentPage() {
    return (
        <Layout>
            <Summary />
        </Layout>
    )
}