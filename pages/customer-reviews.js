import React from 'react';
import axios from 'axios';
import Layout from '@/src/components/Layout';
import dynamic from 'next/dynamic';

const SeeAllReviews = dynamic(() => import('@/src/screens/SeeAllReviews'));

function CustomerReviewsPage({ googleReviewData }) {
  return (
    <Layout>
      <SeeAllReviews googleReviewData={googleReviewData} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJa3dY0d5VtokR648gGwczRYc&key=AIzaSyCZUtli9uWSJhWjoIt0xtlPxnf97tu5y5g');
    const googleReview = res.data;
    return {
      props: {
        googleReviewData: googleReview,
      },
    };
  } catch (error) {
    console.error('Error fetching Google review data:', error);
  }
};

export default CustomerReviewsPage;