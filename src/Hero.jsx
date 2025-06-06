import React, { useState, useRef, useEffect } from 'react'
import videoSrc from './assets/hero-video.mp4'
import SwitchButton from './nav bar/SwitchButton'

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef(null)

  // Whenever isPaused changes, pause or play the video
  useEffect(() => {
    if (!videoRef.current) return
    if (isPaused) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }, [isPaused])

  // Toggle the state when the switch changes
  const handleToggle = () => {
    setIsPaused((prevState) => !prevState)
  }

  return (
    <section className="hero">
      <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline>
        <source src={`https://res.cloudinary.com/travel-adam/video/upload/v1749241532/generic%20placeholders/hero-video_emdpwq.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-text-content-div">
        <h3>travel with the best</h3>
      </div>

      <div className="video-control-div">
        <SwitchButton handleToggle={handleToggle} />
      </div>
    </section>
  )
}

export default Hero
