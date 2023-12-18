import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import Moviedetail from './components/MoviDetail/Moviedetail'
import PageNotfound from './components/PageNotFound/PageNotfound'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<Moviedetail />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
