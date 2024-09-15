import Layout from '@/src/components/Layout'
import dynamic from 'next/dynamic';

const ContactUs = dynamic(() => import('@/src/screens/ContactUs'));

export default function ContactusPage() {
  return (
    <Layout>
      <ContactUs />
    </Layout>
  )
}