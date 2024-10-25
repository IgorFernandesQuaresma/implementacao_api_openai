import './App.css'
import SideMenu from './components/Menu/Menu'
import ChatBox from './components/ChatBox/ChatBox'
import { useContext } from 'react'
import { OpenContext } from './context/ContextOpen'
import backgroundImage from './assets/dbs-goku-3840x2160.jpg';



function App() {



  const {open} = useContext(OpenContext)

  return (
    <>
    
      <SideMenu/>
      
      <section className='App'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Para cobrir todo o espaço do div
        backgroundPosition: 'center', // Para centralizar a imagem
        height: '100vh', // Para ocupar a altura total da viewport
    }}
    >
        {open && <ChatBox />}
      </section>
      
    </>
  )
}

export default App
