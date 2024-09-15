import React, { Suspense } from 'react';
import axios from 'axios';
import Layout from '@/src/components/Layout';
import { API, BASE_URL } from '@/src/apiEndPoint';
import BlogFallBack from '@/src/screens/BlogFallBack';
import dynamic from 'next/dynamic';

const LazyBlogComponent = dynamic(() => import('@/src/screens/Blogs'));

const BlogsPage = ({ blogData,authors, filteredHeadings }) => {
  return (
    <Suspense fallback={<BlogFallBack />}>
      <Layout>
        <LazyBlogComponent blogData={blogData} authors={authors} filteredHeadings={filteredHeadings} />
      </Layout>
    </Suspense>
  );
};

BlogsPage.getInitialProps = async (context) => {
  try {
    const res = await axios.get(`${BASE_URL}${API.Blogs}`);
    const authors=res?.data?.Author || [];
    const blogData = res?.data?.blogs || [];
    
    const searchTerm = context.query.search;
    const category = context.query.category;

    const filteredHeadings = blogData.filter((item) => {
      const searchFilter =
        !searchTerm || item.Title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryFilter = !category || item.Category.toLowerCase() === category.toLowerCase();
      return searchFilter && categoryFilter;
    });

    return {
      blogData,
      authors,
      filteredHeadings,
    };
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
  }
};

export default BlogsPage;