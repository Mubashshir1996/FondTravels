import Layout from '@/src/components/Layout';
import dynamic from 'next/dynamic';

const HotelBookingPolicy = dynamic(() => import('@/src/screens/HotelBookingPolicy'));

export default function HotelBookingPolicyPage() {
  return (
    <Layout>
      <HotelBookingPolicy />
    </Layout>
  )
}