import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="imagen del logo" />
        </Link>
        <nav className="navigation">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
