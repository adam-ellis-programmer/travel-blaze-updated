import Countries from './Countries'
import Hero from './Hero'
import Nav from './nav bar/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Reviews from './Reviews'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Countries />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
