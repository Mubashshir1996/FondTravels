import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const BaggageFees = dynamic(() => import('@/src/screens/BaggageFees'));

export default function BaggageFeesPage() {
    return (
        <Layout>
            <BaggageFees />
        </Layout>
    )
}