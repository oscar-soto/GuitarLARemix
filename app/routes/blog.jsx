import { useLoaderData } from '@remix-run/react';
import Post from '~/components/post';
import { getPosts } from '~/models/posts.server';

import styles from '~/styles/blog.css';

export const meta = () => {
  return {
    title: 'GuitarraLA - Sobre Nosotros',
    description: 'Ventas de gutarras, blog de musica y mas',
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
      <div className="heading">Blog</div>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
