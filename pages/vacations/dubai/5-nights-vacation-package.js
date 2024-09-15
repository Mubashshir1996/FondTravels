import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const ViewOfferDubai = dynamic(() => import('@/src/screens/ViewOfferDubaiNights'));

export default function Dubai5NightsPage() {
  return (
    <Layout>
      <ViewOfferDubai />
    </Layout>
  )
}