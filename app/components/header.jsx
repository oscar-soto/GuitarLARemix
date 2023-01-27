import { Link, useLocation } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="imagen del logo" />
        </Link>
        <nav className="navigation">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className={location.pathname === '/nosotros' ? 'active' : ''}
          >
            Nosotros
          </Link>
          <Link
            to="/tienda"
            className={location.pathname === '/tienda' ? 'active' : ''}
          >
            Tienda
          </Link>
          <Link
            to="/blog"
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
