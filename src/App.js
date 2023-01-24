import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Gutenberg from './components/Gutenberg'
import QuietPond from './components/QuietPond'
import Blobs from './components/Blobs'
import Kollywood from './components/Kollywood'
import Truchet from './components/Truchet'
import Assemblage from './components/Assemblage'
import TennisMisses from './components/TennisMisses'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/portfolio/hairy-blobs"element={<Blobs/>} />
          <Route path="/portfolio/gutenberg-clock" element={<Gutenberg/>} />
          <Route path="/portfolio/colorism-in-Kollywood" element={<Kollywood/>} />
          <Route path="/portfolio/quiet-pond" element={<QuietPond/>} />
          <Route path="/portfolio/body-truchet-tiling" element={<Truchet/>} />
          <Route path="/portfolio/radioactive-food-web" element={<Assemblage/>} />
          <Route path="/portfolio/tennis-misses" element={<TennisMisses/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App