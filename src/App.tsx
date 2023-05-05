import Bloco from './components/Bloco'
import Blocos from './components/Blocos'
import TopHeader from './components/TopHeader'
import Wallpaper from './components/Wallpaper'
import Squares from './components/Squares'
import Mural from './components/Mural'
import Points from './components/Points'
import Form from './components/Form'
import Footer from './components/Footer'

import './App.css'
import './styles/main.sass'

function App() {
  return (
    <>
      <TopHeader />
      <Wallpaper />
      <Blocos>
        <Bloco text1="Viagens nacionais" text2='O clima perfeirto, no lugar perfeito' text3='Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço. ' img={'./f1-2x.png'} />
        <Bloco text1="Viagens nacionais" text2='Curta uma nova vibe entre amigos' text3='Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi. ' img={'./f2-2x.png'} />
        <Bloco text1="Viagens nacionais" text2='Algumas experiências são inexplicáveis' text3='Conheça as fontes de Caldas Novas, Goiás. Águas quentes, num sereno, relaxante e natural.' img={'./f3-2x.png'} />
      </Blocos>
      <Squares />
      <Mural />
      <Points />
      <Form />
      <Footer />
    </>
  )
}

export default App
