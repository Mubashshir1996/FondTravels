import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const OurServiceFeesPage = dynamic(() => import('@/src/screens/OurServiceFees'));

export default function OurServiceFees() {
    return (
        <Layout>
            <OurServiceFeesPage />
        </Layout>
    )
}