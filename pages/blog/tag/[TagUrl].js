import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout'
import BlogFallBack from '@/src/screens/BlogFallBack';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LazyBlogTagComponent = dynamic(() => import('@/src/screens/BlogTag'));

const BlogsByTag = ({ blogData,authors, filteredHeadings, filterHeadingUpdated }) => {
    return (
        <Suspense fallback={<BlogFallBack />}>
            <Layout>
                <LazyBlogTagComponent blogData={blogData} authors={authors} filteredHeadings={filteredHeadings} filterHeadingUpdated={filterHeadingUpdated} />
            </Layout>
        </Suspense>
    )
}

export async function getServerSideProps(context) {
    try {
        const res = await axios.get(`${BASE_URL}${API.Blogs}`);
        const authors = res?.data?.Author || [];
        const blogData = res?.data?.blogs || [];
        
        const { TagUrl } = context.query;
        const filteredHeadings = blogData?.filter(item =>
            item?.TagUrl?.toLowerCase() === TagUrl?.toLowerCase()
        );

        if (filteredHeadings.length === 0) {
            return {
                notFound: true,
            };
        }

        const filterHeadingUpdated = filteredHeadings;

        return {
            props: {
                blogData,
                authors,
                filteredHeadings,
                filterHeadingUpdated,
            },
        };
    } catch (error) {
        console.error('Error fetching blog data:', error.message);
        return {
            notFound: true,
        };
    }
}

export default BlogsByTag;