import Nav from './nav';

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container bar">
        <Nav />

        <p className="copyright">
          todos los derechos reservados {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
