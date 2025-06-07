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

  // Define video URL in one place
  const videoUrl = `https://res.cloudinary.com/travel-adam/video/upload/v1749241532/generic%20placeholders/hero-video_emdpwq.mp4`

  useEffect(() => {
    const video = document.createElement('video')
    let timeoutId

    const preloadVideo = () => {
      video.src = videoUrl // Use the same URL

      video.onloadeddata = () => {
        setloading(false)
        clearTimeout(timeoutId)
      }

      video.onerror = () => {
        console.error('Video failed to load')
        setloading(false)
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        console.log('Video preload timeout - removing loader anyway')
        setloading(false)
      }, 2000)
    }

    preloadVideo()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Nav />
      <Hero videoUrl={videoUrl} /> {/* Pass URL as prop */}
      <Countries />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
