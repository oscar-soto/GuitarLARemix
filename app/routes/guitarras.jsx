import { Outlet } from '@remix-run/react';
import styles from '~/styles/guitars.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const Tienda = () => {

  return (
    <main className="container">

      <Outlet />
    </main>
  );
};

export default Tienda;
