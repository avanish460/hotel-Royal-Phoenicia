import './App.css'
import EventVerticalScroll from './components/EventVerticalScroll'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import EventPage from './pages/EventPage'
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
      <EventPage />
    </>
  )
}

export default App
