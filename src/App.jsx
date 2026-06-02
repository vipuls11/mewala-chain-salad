import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Header/Footer'
import Navbar from './components/Header/Navbar'
import AboutPage from './main-container/AboutPage'
import ContactPage from './main-container/ContactPage'
import GalleryPage from './main-container/GalleryPage'
import Home from './main-container/Home'
import MenuPage from './main-container/MenuPage'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full bg-blue-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
