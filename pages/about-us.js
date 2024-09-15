import Layout from '@/src/components/Layout'
import { aboutUsData, bookWithUsData, suitableTravelDealsData } from '@/src/helpers/AboutUs';
import { AboutUsBannerData } from '@/src/helpers/BannerData';
import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('@/src/screens/AboutUs'));

export default function AboutUsPage({ banner, aboutUs, bookWithUs, suitableTravelDeals }) {
  return (
    <Layout>
      <AboutUs banner={banner} aboutUs={aboutUs} bookWithUs={bookWithUs} suitableTravelDeals={suitableTravelDeals} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      banner: AboutUsBannerData,
      aboutUs: aboutUsData,
      bookWithUs: bookWithUsData,
      suitableTravelDeals: suitableTravelDealsData
    }
  };
}