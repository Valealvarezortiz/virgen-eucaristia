import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Historia from '../sections/Historia'
import Oracion from '../sections/Oracion'
import Galeria from '../sections/Galeria'
import Contacto from '../sections/Contacto'
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Historia />
      <Oracion />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home