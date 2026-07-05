function Historia() {
  return (
    <section className="section section-alt" id="historia">
      <div className="container">

        <h2 className="title">Historia</h2>
        <div className="section-divider"></div>

        <p className="subtitle">
          Un origen marcado por la providencia, la fe y el amor a Jesús Eucaristía.
        </p>

        <div className="historia-grid">

          {/* BLOQUE 1 */}
          <div className="card historia-card">
            <h3 className="historia-titulo">Origen</h3>
            <p>
              La Virgen de la Eucaristía se originó el 30 de octubre de 2003,
              en la ciudad de Yerba Buena, Tucumán, Argentina.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className="card historia-card">
            <h3 className="historia-titulo">Manifestación</h3>
            <p>
              La Madre de Dios se hizo conocer de forma sobrenatural a su hijo
              predilecto, el padre Jorge A. Gandur, quien supo en su corazón de
              la existencia de una imagen de la Virgen de la Eucaristía que estaba
              guardada, olvidada y que quería ser venerada.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className="card historia-card">
            <h3 className="historia-titulo">Redescubrimiento</h3>
            <p>
              Gracias a la intervención de la Virgen y del padre Gandur, la imagen
              salió a la luz, luego de haber permanecido guardada durante 15 años.
            </p>
          </div>

          {/* BLOQUE 4 */}
          <div className="card historia-card">
            <h3 className="historia-titulo">Vida en la Eucaristía</h3>
            <p>
              A partir de este hecho sobrenatural, comenzó a difundirse esta
              advocación, dando lugar a numerosos testimonios de fe, conversiones,
              curaciones y gracias recibidas por quienes acudían a Ella.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Historia