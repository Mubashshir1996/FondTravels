import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const VisaInfoSection = dynamic(() => import('@/src/screens/VisaInfo'));

export default function VisaInfoSectionPage() {
    return (
        <Layout>
            <VisaInfoSection />
        </Layout>
    )
}