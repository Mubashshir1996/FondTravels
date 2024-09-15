import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const TermsAndCondition = dynamic(() => import('@/src/screens/TermsAndConditions'));

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <TermsAndCondition />
    </Layout>
  )
}