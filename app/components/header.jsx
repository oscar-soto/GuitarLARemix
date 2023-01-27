import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';
import Nav from './nav';

const Header = () => {
  
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="imagen del logo" />
        </Link>
        
        <Nav />
      </div>
    </header>
  );
};

export default Header;
