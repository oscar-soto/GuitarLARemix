import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
} from '@remix-run/react';
import Header from '~/components/header';
import styles from '~/styles/index.css';
import Footer from '~/components/footer';

export const meta = () => {
  return {
    charset: 'utf-8',
    title: 'GuitarLA - Remix',
    viewport: 'width=device-width,initial-scale=1',
  };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: '"https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};
const Document = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

// Errors handling
export const CatchBoundary = () => {
  const error = useCatch();
  
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className='error-link' to="/">Tal vez quieras volver a la página principal</Link>
    </Document>
  );
};

export const ErrorBoundary = ({ error }) => {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className='error-link' to="/">Tal vez quieras volver a la página principal</Link>
    </Document>
  );
};

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export default App;
