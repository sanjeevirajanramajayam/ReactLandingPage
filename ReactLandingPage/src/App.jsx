import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Courses from './courses'
import Campus from './campus'
import Testimonials from './testimonials'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Courses />
      <Campus />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
