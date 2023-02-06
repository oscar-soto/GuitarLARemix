import { useLoaderData } from '@remix-run/react';

// Models
import { getGuitars } from '~/models/guitars.server';
import { getPosts } from '~/models/posts.server';
import { getCourse } from '~/models/course.sevice';

// Components
import GuitarsList from '~/components/guitarsList';
import PostsList from '~/components/postsList';
import Course from '~/components/course';

// Styles
import stylesBlog from '~/styles/blog.css';
import stylesGuitars from '~/styles/guitars.css';
import stylesCourse from '~/styles/course.css';

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
    {
      rel: 'stylesheet',
      href: stylesCourse,
    },
  ];
};

export const loader = async () => {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data,
  };
};

const Index = () => {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="contianer">
        <GuitarsList guitars={guitars} />
      </main>

      <Course course={course} />

      <section className="container">
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
