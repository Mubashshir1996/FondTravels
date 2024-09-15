import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const PrivacyPolicy = dynamic(() => import('@/src/screens/PrivacyPolicy'));

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  )
}