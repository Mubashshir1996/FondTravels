import Layout from '@/src/components/Layout';
import dynamic from 'next/dynamic';
import React from 'react';

const HotelPaymentPage = dynamic(() => import('@/src/screens/Hotels/HotelPayment'));

const HotelPayment = () => {
    return (
        <Layout>
            <HotelPaymentPage style={{ maxWidth: "1170px", margin: '0 auto' }} />
        </Layout>
    )
}

export default HotelPayment;