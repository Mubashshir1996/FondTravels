import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const ViewOfferSingapore = dynamic(() => import('@/src/screens/ViewOfferSingaporeNights'));

export default function Singapore4NightsPage() {
  return (
    <Layout>
      <ViewOfferSingapore />
    </Layout>
  )
}