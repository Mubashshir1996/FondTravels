import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const HomeSpanish = dynamic(() => import('@/src/screens/HomeSpanish'));

export default function HomeSpanishPage() {
    return (
        <Layout>
            <HomeSpanish />
        </Layout>
    )
}