import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import { getPosts } from '~/models/posts.server';

import GuitarsList from '~/components/guitarsList';
import stylesBlog from '~/styles/blog.css';

// Styles
import stylesGuitars from '~/styles/guitars.css';
import PostsList from '~/components/postsList';

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
      href: stylesGuitars,
    },
    {
      rel: 'stylesheet',
      href: stylesBlog,
    },
  ];
};

export const loader = async () => {
  const [guitars, posts] = await Promise.all([getGuitars(), getPosts()]);

  return {
    guitars: guitars.data,
    posts: posts.data,
  };
};

const Index = () => {
  const { guitars, posts } = useLoaderData();

  return (
    <>
      <main className="contianer">
        <GuitarsList guitars={guitars} />
      </main>

      <section className="container">
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
