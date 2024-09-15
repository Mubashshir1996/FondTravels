import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const ListOfFlightsSearch = dynamic(() => import('@/src/screens/ListOfFlightsSearch'));

export default function FlightSearch() {
  return (
    <Layout>
      <ListOfFlightsSearch />
    </Layout>
  )
}