import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

import Guitar from '~/components/guitar';

export const loader = async () => {
  const guitars = await getGuitar();
  return guitars.data;
};

export const Tienda = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Nuestra Colección</h2>

      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
