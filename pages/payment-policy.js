import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const PaymnetPolicy = dynamic(() => import('@/src/screens/PaymentPolicy'));

export default function PaymnetPolicyPage() {
    return (
        <Layout>
            <PaymnetPolicy />
        </Layout>
    )
}