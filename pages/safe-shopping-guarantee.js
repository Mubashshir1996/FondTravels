import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const ShoppingGaurantee = dynamic(() => import('@/src/screens/ShoppingGaurantee'));

export default function ShoppingGauranteePage() {
    return (
        <Layout>
            <ShoppingGaurantee />
        </Layout>
    )
}