import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NewsProvider } from './context/News/NewsContext'
import NotFoundPages from './pages/NotFoundPages'
import About from './pages/About'
import { WeatherProvider } from './context/Weather/WeatherContext'


function App() {
  return (

    <NewsProvider>
      <WeatherProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='*' element={<NotFoundPages />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </WeatherProvider>
    </NewsProvider>

  )
}

export default App