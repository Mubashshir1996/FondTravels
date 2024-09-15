import axios from 'axios';
import { API, BASE_URL } from '@/src/apiEndPoint';
import Layout from '@/src/components/Layout';
import dynamic from 'next/dynamic';

const BlogDetailsPage = dynamic(() => import('@/src/screens/BlogDetails'));

const BlogDetailsMainPage = ({ metaData, commentData }) => {
    return (
        <Layout>
            <BlogDetailsPage metaData={metaData} commentData={commentData} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    try {
        const { Url } = context.query;
        if (!Url) {
            return { notFound: true };
        }

        const apiUrl = `${BASE_URL}${API.CommentBlog}${Url}`;
        const res = await axios.get(apiUrl);

        if (res.status !== 200 || !res.data) {
            return { notFound: true };
        }

        const data = res.data;
        const { Comments, ...metaData } = data;

        if (Object.keys(metaData).length === 0 && metaData.constructor === Object) {
            return { notFound: true };
        }

        return {
            props: {
                metaData,
                commentData: Comments || [],
            },
        };
    } catch (error) {
        console.error('Error fetching blog details:', error.message);
        return { notFound: true };
    }
}

export default BlogDetailsMainPage;