import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
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
  const [amount, setAmount] = useState(0);
  const guitar = useLoaderData();
  const { description, price, name, guitar_imagen } = guitar.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(amount < 1) {
      alert('Debes seleccionar una cantidad')
      return;
    }

    const guitarSelected = {
      id: guitar.data[0].id,
      image: guitar_imagen.data.attributes.url,
      name,
      price,
      amount
    }

    console.log(guitarSelected)
  }

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

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Cantidad</label>

          <select
            name=""
            id="amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al Carrito" />
        </form>
      </div>
    </div>
  );
};

export default Guitar;
