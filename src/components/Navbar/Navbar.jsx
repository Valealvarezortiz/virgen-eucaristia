import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="/#inicio" className="navbar-brand">
          <img
            src="/images/logo-navbar.webp.webp"
            alt="Virgen de la Eucaristía"
            className="navbar-logo"
          />

          <span>Virgen de la Eucaristía</span>
        </a>

        <nav>
          <ul className="navbar-menu">
            <li><a href="/#historia">Historia</a></li>
            <li><a href="/#oracion">Oración</a></li>
            <li><a href="/#galeria">Galería</a></li>
            <li><a href="/testimonios">Testimonios</a></li>
            <li><a href="/#contacto">Contacto</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Navbar