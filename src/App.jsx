import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GastroPage from './pages/GastroPage'
import RoomPage from './pages/RoomPage'
import SpaWellness from './pages/SpaWellness'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <RoomPage />
      <SpaWellness />
      <GastroPage />
    </>
  )
}

export default App
