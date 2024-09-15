import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout';
import BlogFallBack from '@/src/screens/BlogFallBack';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LazyBlogCategoryComponent = dynamic(() => import('@/src/screens/BlogsByCategory'));

const BlogsByCategoryMainPage = ({ blogData, authors, filteredHeadings }) => {
    return (
        <Suspense fallback={<BlogFallBack />}>
            <Layout>
                <LazyBlogCategoryComponent blogData={blogData} authors={authors} filteredHeadings={filteredHeadings} />
            </Layout>
        </Suspense>
    );
}

export async function getServerSideProps(context) {
    try {
        const res = await axios.get(`${BASE_URL}${API.Blogs}`);
        const authors = res?.data?.Author || [];
        const blogData = res?.data?.blogs || [];

        const { CURl } = context.query;
        const filteredHeadings = blogData?.filter(item =>
            item?.CURl?.toLowerCase() === CURl?.toLowerCase()
        );

        if (filteredHeadings.length === 0) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                blogData,
                authors,
                filteredHeadings,
            },
        };
    } catch (error) {
        console.error('Error fetching blog data:', error.message);
        return {
            notFound: true,
        };
    }
}

export default BlogsByCategoryMainPage;