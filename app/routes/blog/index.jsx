import { useLoaderData } from '@remix-run/react';
import PostsList from '~/components/postsList';
import { getPosts } from '~/models/posts.server';

export const meta = () => {
  return {
    title: 'GuitarraLA - Nuestro blog',
    description: 'GuitarraLA, Blog de música y Ventas de guitarras',
  };
};

export const loader = async () => {
  const posts = await getPosts();
  return posts?.data;
};

const Blog = () => {
  const posts = useLoaderData();

  return (
    <PostsList posts={posts} />
  );
};

export default Blog;
