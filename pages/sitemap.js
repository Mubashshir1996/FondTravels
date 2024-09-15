import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const Sitemap = dynamic(() => import('@/src/screens/Sitemap'));

export default function SitemapPage() {
    return (
        <Layout>
            <Sitemap />
        </Layout>
    )
}