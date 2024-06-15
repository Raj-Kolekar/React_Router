import { useState } from 'react'
import Footer from './Footer/Footer'
import './App.css'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import About from './About/About'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid h-screen w-screen">
      <div>
        <Header />
      </div>
     <div>
        <Outlet />
      </div>
      
      <div>
        <Footer />
      </div>
      </div>
      
      
    </>
  )
}

export default App
