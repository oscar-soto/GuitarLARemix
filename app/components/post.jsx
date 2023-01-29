import { Link } from '@remix-run/react';

const Post = ({ post }) => {
  const { content, publishedAt, title, url, imagen } = post;
  return (
    <article className='post'>
      <figure>
        <img
          className="image"
          src={imagen.data.attributes.formats.small.url}
          alt={`Imagen blog ${title}`}
        />
      </figure>
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{publishedAt}</p>
        <p className="summary">{content}</p>
        <Link className='link' to={`/posts/${url}`}>Leer entradas</Link>
      </div>
    </article>
  );
};

export default Post;
