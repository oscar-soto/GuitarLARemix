import { Link } from "@remix-run/react"

const Header = () => {
  return (
    <header className="header">
      <div className="container bar">
        <div className="logo">

        </div>
        <nav className="navigation">
          <Link
            to="/"
          >Inicio</Link>
          <Link
            to="/nosotros"
          >Nosotros</Link>
          <Link
            to="/tienda"
          >Tienda</Link>
          <Link
            to="/blog"
          >Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header