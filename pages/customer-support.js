import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const CustomerSupport = dynamic(() => import('@/src/screens/CustomerSupport'));

export default function CustomerSupportPage() {
    return (
        <Layout>
            <CustomerSupport />
        </Layout>
    )
}