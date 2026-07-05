import { useMemo, useState } from 'react'
import { testimonios } from '../data/testimonios'

const TESTIMONIOS_POR_PAGINA = 9

function Testimonios() {
  const [testimonioActivo, setTestimonioActivo] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [paginaActual, setPaginaActual] = useState(1)

 const testimoniosFiltrados = useMemo(() => {
  return testimonios
    .filter((item) => {
      return item.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    })
    .sort((a, b) => Number(b.destacado) - Number(a.destacado))
}, [busqueda])

  const totalPaginas = Math.ceil(testimoniosFiltrados.length / TESTIMONIOS_POR_PAGINA)

  const indiceInicial = (paginaActual - 1) * TESTIMONIOS_POR_PAGINA
  const indiceFinal = indiceInicial + TESTIMONIOS_POR_PAGINA

  const testimoniosVisibles = testimoniosFiltrados.slice(indiceInicial, indiceFinal)

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="section" id="testimonios">
      <div className="container">
        <div className="testimonios-hero">
          <p className="testimonios-kicker">Archivo de testimonios</p>

          <h2 className="title">Testimonios de fe y gracia</h2>
          <div className="section-divider"></div>

          <p className="subtitle">
            Relatos de personas que han encontrado consuelo, esperanza y bendiciones
            por medio de la devoción a la Virgen de la Eucaristía.
          </p>
        </div>

        <div className="testimonios-toolbar">
          <input
            type="text"
            placeholder="Buscar testimonio..."
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value)
              setPaginaActual(1)
            }}
            className="testimonios-buscador"
          />
        </div>

        <p className="testimonios-contador">
          Mostrando {testimoniosVisibles.length} de {testimoniosFiltrados.length} testimonios
        </p>

        <div className="testimonios-grid">
          {testimoniosVisibles.map((item) => (
            <div
              className={`card testimonio-card ${item.destacado ? 'testimonio-card-destacado' : ''}`}
              key={item.id}
            >
              <p className="testimonio-comillas">“</p>

              <div>
                {item.destacado && (
                  <span className="testimonio-destacado">
                    Destacado
                  </span>
                )}
              </div>

              <p className="testimonio-resumen">
                {item.resumen}
              </p>

              <div className="testimonio-footer">
                <strong className="testimonio-nombre">{item.nombre}</strong>

                <button
                  className="btn-primary"
                  onClick={() => setTestimonioActivo(item)}
                >
                  Leer completo
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPaginas > 1 && (
          <div className="paginacion-testimonios">
            <button
              className="paginacion-btn"
              disabled={paginaActual === 1}
              onClick={() => cambiarPagina(paginaActual - 1)}
            >
              ‹
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => {
              const numeroPagina = index + 1

              return (
                <button
                  key={numeroPagina}
                  className={`paginacion-btn ${paginaActual === numeroPagina ? 'activo' : ''}`}
                  onClick={() => cambiarPagina(numeroPagina)}
                >
                  {numeroPagina}
                </button>
              )
            })}

            <button
              className="paginacion-btn"
              disabled={paginaActual === totalPaginas}
              onClick={() => cambiarPagina(paginaActual + 1)}
            >
              ›
            </button>
          </div>
        )}
      </div>

      {testimonioActivo && (
        <div className="modal-overlay" onClick={() => setTestimonioActivo(null)}>
          <div
            className="modal-testimonio"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-cerrar"
              onClick={() => setTestimonioActivo(null)}
            >
              ×
            </button>

            {testimonioActivo.imagen && (
              <div className="modal-imagen-container">
                <img
                  src={testimonioActivo.imagen}
                  alt={testimonioActivo.nombre}
                  className="modal-imagen"
                />
              </div>
            )}

            <h3 className="modal-titulo">{testimonioActivo.nombre}</h3>

            <div className="modal-texto">
              {testimonioActivo.completo.split('\n').map((parrafo, index) => (
                parrafo.trim() && <p key={index}>{parrafo}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonios