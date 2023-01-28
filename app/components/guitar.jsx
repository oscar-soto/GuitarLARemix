import { Link } from '@remix-run/react';

const Guitar = ({ guitar }) => {
  const { description, price, name, url, guitar_imagen } = guitar;

  return (
    <div className="guitar">
      <figure>
        <img
          src={guitar_imagen.data.attributes.formats.medium.url}
          alt={`Imagen guitarra ${name}`}
        />
      </figure>

      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver productos
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
