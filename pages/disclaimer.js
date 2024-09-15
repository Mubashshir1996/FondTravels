import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const Disclaimer = dynamic(() => import('@/src/screens/Disclaimer'));

export default function DisclaimerPage() {
  return (
    <Layout>
      <Disclaimer />
    </Layout>
  )
}