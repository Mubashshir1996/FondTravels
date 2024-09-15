import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const FareRulesScreen = dynamic(() => import('@/src/screens/FareRules'));

export default function FareRulesPage() {
    return (
        <Layout>
            <FareRulesScreen />
        </Layout>
    )
}