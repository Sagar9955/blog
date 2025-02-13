import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DataOverlays from "./components/DataOverlays"
import VideoSection from "./components/VideoSection"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DataOverlays />
      <VideoSection />
    </div>
  )
}

export default App

