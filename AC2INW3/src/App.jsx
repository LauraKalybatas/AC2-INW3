
import './App.css'
import Banner from './Componentes/Banner/Banner'
import Cards from './Componentes/Cards/Cards'
import CardsContainer2 from './Componentes/CardsContainer2/CardsContainer2'
import Contato from './Componentes/Contato/Contato'
import Equipe from './Componentes/Equipe/Equipe'
import Form from './Componentes/Form/Form'
import Habilidades from './Componentes/Habilidades/Habilidades'
import HabilidadesIntro from './Componentes/HabilidadesIntro/HabilidadesIntro'
import Footer from './Componentes/Footer/Footer'

function App() {
  return (
    <>
      <Banner/>
      <Equipe/>
      <Cards/>
      <Habilidades/>
      <HabilidadesIntro/>
      <CardsContainer2/>
      <Contato/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
