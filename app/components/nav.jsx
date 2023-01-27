import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  const location = useLocation();
  
  return (
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
  );
};

export default Nav;
