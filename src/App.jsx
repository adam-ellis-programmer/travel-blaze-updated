import Countries from './Countries'
import Hero from './Hero'
import Nav from './nav bar/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Reviews from './Reviews'
import Footer from './Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from './Loader'

function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const video = document.createElement('video')
    let timeoutId

    const preloadVideo = () => {
      video.src = `https://res.cloudinary.com/travel-adam/video/upload/v1749241532/generic%20placeholders/hero-video_emdpwq.mp4`

      video.onloadeddata = () => {
        setloading(false)
        clearTimeout(timeoutId)
      }

      video.onerror = () => {
        console.error('Video failed to load')
        setloading(false)
        clearTimeout(timeoutId)
      }

      // ADD THIS: Fallback timeout for mobile
      timeoutId = setTimeout(() => {
        console.log('Video preload timeout - removing loader anyway')
        setloading(false)
      }, 2000) // Remove loader after 3 seconds regardless
    }

    preloadVideo()

    // Cleanup
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  if (loading) return <Loader />

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
