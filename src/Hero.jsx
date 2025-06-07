import React, { useState, useRef, useEffect } from 'react'
import SwitchButton from './nav bar/SwitchButton'

const Hero = ({ videoUrl }) => {
  const [isPaused, setIsPaused] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true)
  const [videoFailed, setVideoFailed] = useState(false) // Add this line
  const videoRef = useRef(null)

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoading(false)
  }

  const handleVideoError = () => {
    console.error('Hero video failed to load')
    setVideoLoading(false)
    setVideoFailed(true) // Add this line
  }

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
    <section className='hero'>
      {/* Show loader while video is loading OR if video failed */}
      {(videoLoading || videoFailed) && (
        <div className='hero-video-loader'>
          <img
            src='/beach.jpg'
            alt='Loading video...'
            className='hero-loader-image'
          />
        </div>
      )}

      <video
        ref={videoRef}
        className={`hero-video ${videoLoading ? 'video-loading' : ''}`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='hero-text-content-div'>
        <h3>travel with the best</h3>
      </div>

      <div className='video-control-div'>
        <SwitchButton handleToggle={handleToggle} />
      </div>
    </section>
  )
}

export default Hero
