import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const TravelAssist = dynamic(() => import('@/src/screens/TravelAssist'));

export default function TravelAssistPage() {
    return (
        <Layout>
            <TravelAssist />
        </Layout>
    )
}