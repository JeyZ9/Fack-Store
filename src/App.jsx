import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

//import page
import Home from './pages/Home'
import Product from './pages/ProductDetails'

//import components
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidde'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
