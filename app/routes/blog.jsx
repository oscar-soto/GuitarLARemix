import { useLoaderData } from '@remix-run/react';
import PostsList from '~/components/postsList';
import { getPosts } from '~/models/posts.server';

import styles from '~/styles/blog.css';

export const meta = () => {
  return {
    title: 'GuitarraLA - Nuestro blog',
    description: 'GuitarraLA, Blog de música y Ventas de guitarras',
  };
};
export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const loader = async () => {
  const posts = await getPosts();
  return posts?.data;
};

const Blog = () => {
  const posts = useLoaderData();

  return (
    <div className="container">
      <PostsList posts={posts} />
    </div>
  );
};

export default Blog;
