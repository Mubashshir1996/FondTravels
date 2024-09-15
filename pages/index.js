import Head from 'next/head';
import Layout from '@/src/components/Layout';
import axios from 'axios';
import { API, BASE_URL } from '@/src/apiEndPoint';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/src/screens/Home'));

const Home = ({ bookingCount }) => {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            '@type': 'Organization',
            "name": "Fond Travels LLC",
            "url": "https://www.fondtravels.com/",
            "logo": "https://www.fondtravels.com/content/images/logo.png",
            "description": "Fond Travels is your cheap flights finder and travel solution provider. Get affordable and attractive deals on Flights, Vacations, Hotels, Bus and Car bookings. Book Online or Call on our freephone no. +1(323)-800-6001.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2700 Neabsco Common Pl Suite #101",
              "postOfficeBoxNumber": "Woodbridge",
              "addressLocality": "Woodbridge",
              "addressRegion": "Virginia",
              "postalCode": "VA 22191",
              "addressCountry": "United States"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1(323)-800-6001",
              "email": "info@fondtravels.com",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/FondTravels/",
              "https://twitter.com/FondTravels",
              "https://www.instagram.com/fondtravels/",
              "https://www.linkedin.com/company/fond-travels/",
              "https://www.pinterest.com/fondtravels/",
              "https://www.youtube.com/@fondtravels4460"
            ]
          })
        }}
          onLoad="this.removeAttribute('onLoad');"
        />
      </Head>

      <Layout>
        <HomePage bookingCount={bookingCount} />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${BASE_URL}${API.BookingCount}`);
    const bookingCount = res?.data;

    return {
      props: {
        bookingCount,
      },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
  }
}

export default Home;