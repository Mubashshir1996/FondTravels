import React from 'react';
import axios from 'axios';
import Layout from '@/src/components/Layout';
import { API, BASE_URL } from '@/src/apiEndPoint';
import dynamic from 'next/dynamic';

const AuthorDetailsPage = dynamic(() => import('@/src/screens/Author'));

const AuthorDetailsMainPage = ({ blogData, author, filteredHeadings }) => {
    return (
        <Layout>
            <AuthorDetailsPage blogData={blogData} author={author} filteredHeadings={filteredHeadings} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    try {
        const { Url } = context.query;
        const res = await axios.get(`${BASE_URL}${API.Author}${Url}`);
        const author = res?.data?.Author || {};

        if (res.status !== 200 || !res.data) {
            return { notFound: true };
        }

        const blogData = res?.data?.blogs || [];

        const searchTerm = context.query.search;
        const category = context.query.category;

        const filteredHeadings = blogData.filter((item) => {
            const searchFilter =
                !searchTerm || item.Title.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryFilter = !category || item.Category.toLowerCase() === category.toLowerCase();
            return searchFilter && categoryFilter;
        });

        if (filteredHeadings.length === 0) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                blogData,
                author,
                filteredHeadings,
            }
        };
    } catch (error) {
        console.error('Error fetching blog data:', error.message);
        return {
            notFound: true,
        };
    }
};

export default AuthorDetailsMainPage;