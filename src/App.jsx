import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrowserRouter>
      <Routes>
        <Route path="/gallery" element={<h1>Gallery Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App
