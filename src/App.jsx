import './App.css'
import ChoosseUs from './components/ChoosseUs'
import Comparison from './components/Comparison'
import Energy from './components/Energy'
import Footer from './components/Footer'
import Header from './components/Header'
import LogoSlider from './components/LogoSlider'
import Questions from './components/Questions'
import Slider from './components/Slider'
import Switch from './components/Switch'

function App() {

  return (
    <>
      <Header />
      <LogoSlider />
      <Energy />
      <Switch />
      <Comparison />
      <ChoosseUs />
      <Slider />
      <Questions />
      <Footer />
    </>
  )
}

export default App
