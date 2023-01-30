import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';

import GuitarsList from '~/components/guitarsList';

import styles from '~/styles/guitars.css';

export const meta = () => {
  return {
    title: 'GuitarraLA - Tienda de Guitarra',
    description: 'GuitarraLA - Nuestra Colleción de Guitarra',
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
  const guitars = await getGuitars();
  return guitars.data;
};

export const Tienda = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <GuitarsList guitars={guitars} />
    </main>
  );
};

export default Tienda;
