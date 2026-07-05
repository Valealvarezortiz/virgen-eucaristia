import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container grid-2">
        <div className="hero-content fade-up">
          <p className="hero-kicker">Devoción · Adoración · Fe</p>
          <h1>Virgen de la Eucaristía</h1>
          <p className="hero-text">
            Madre Santísima, Templo Vivo del Cuerpo de Cristo, guía nuestros
            corazones hacia la adoración, la paz y el amor profundo a Jesús
            Eucaristía.
          </p>

          <div className="hero-buttons">
            <a href="#oracion" className="btn-primary">Leer oración</a>
            <a href="#historia" className="hero-link">Conocer la historia</a>
          </div>
        </div>

        <div className="hero-image-wrap fade-up">
          <div className="hero-glow"></div>
          <img
             src="/images/imagen.2.jpeg"
                alt="Imagen de la Virgen de la Eucaristía"
                className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero