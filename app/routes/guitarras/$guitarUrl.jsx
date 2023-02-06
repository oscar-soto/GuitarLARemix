import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

export const meta = ({ data }) => {
  const name = data?.data[0].attributes.name;

  if (!data) {
    return {
      title: 'GuitarraLA - Guitarra no encontrada',
      description: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }

  return {
    title: `GuitarraLA - ${name}`,
    description: `Guitarras, venta de guitarras, guitarra ${name}`,
  };
};

export const loader = async ({ params }) => {
  const { guitarUrl } = params;
  const guitar = await getGuitar(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    });
  }

  return guitar;
};

const Guitar = () => {
  const guitar = useLoaderData();
  const { description, price, name, guitar_imagen } = guitar.data[0].attributes;

  return (
    <div className="guitar">
      <figure>
        <img
          src={guitar_imagen.data.attributes.url}
          alt={`Imagen de la guitarra ${name}`}
        />
      </figure>

      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Guitar;
