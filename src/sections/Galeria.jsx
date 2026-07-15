function Galeria() {
  const imagenes = [
    {
      id: 1,
      src: '/images/padre-gandur.jpg.jpeg',
      alt: 'Imagen devocional de la Virgen de la Eucaristía',
    },
    {
      id: 2,
      src: '/images/Virgendelaeucaristia1.jpeg',
      alt: 'Fotografía relacionada con la Virgen de la Eucaristía',
    },
    {
      id: 3,
      src: '/images/imagen6nueva.jpg',
      alt: 'Imagen histórica de la Virgen de la Eucaristía',
    },
    {
      id: 4,
      src: '/images/imagen.3.jpeg',
      alt: 'Devoción a la Virgen de la Eucaristía',
    },
    {
      id: 5,
      src: '/images/virgeneucaristia16.jpg',
      alt: 'Imagen religiosa de la Virgen de la Eucaristía',
    },
    {
      id: 6,
      src: '/images/imagen5nueva.jpg',
      alt: 'Fotografía vinculada a la historia de la Virgen de la Eucaristía',
    },
  ]

  return (
    <section className="section section-alt" id="galeria">
      <div className="container">
        <h2 className="title">Galería</h2>
        <div className="section-divider"></div>

        <p className="subtitle">
          Imágenes que acompañan la historia, la devoción y la presencia de la Virgen de la Eucaristía.
        </p>

        <div className="galeria-grid">
          {imagenes.map((imagen) => (
            <div className="galeria-item" key={imagen.id}>
              <img src={imagen.src} alt={imagen.alt} className="galeria-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria