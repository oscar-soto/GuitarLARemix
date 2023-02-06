import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';

import GuitarsList from '~/components/guitarsList';

export const meta = () => {
  return {
    title: 'GuitarraLA - Tienda de Guitarra',
    description: 'GuitarraLA - Nuestra Colleción de Guitarra',
  };
};

export const loader = async () => {
  const guitars = await getGuitars();
  return guitars.data;
};

export const Tienda = () => {
  const guitars = useLoaderData();

  return (
    <GuitarsList guitars={guitars} />
  );
};

export default Tienda;
