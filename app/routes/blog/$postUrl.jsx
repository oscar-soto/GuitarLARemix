import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server';
import { formatDate } from '~/utils/helpers';

export const meta = ({ data }) => {
  const title = data?.data[0].attributes.title;

  if (!data) {
    return {
      title: 'GuitarraLA - Entrada no encontrada',
      description: `Guitarras, venta de guitarras, entrada no encontrada`,
    };
  }

  return {
    title: `GuitarraLA - ${title}`,
    description: `Guitarras, venta de guitarras, entrada ${title}`,
  };
};

export const loader = async ({ params }) => {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada',
    });
  }

  return post;
};

const Post = () => {
  const post = useLoaderData();
  const { title, publishedAt, imagen, content } = post.data[0].attributes;

  return (
    <article className="post mt-3">
      <figure>
        <img
          className="image"
          src={imagen?.data?.attributes.url}
          alt={`Imagen blog ${title}`}
        />
      </figure>

      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
};

export default Post;
