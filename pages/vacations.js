import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const Vacations = dynamic(() => import('@/src/screens/Vacations'));

export default function VacationPage() {
  return (
    <Layout>
      <Vacations />
    </Layout>
  )
}