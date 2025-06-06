import React, { useState } from 'react'

const SwitchButton = ({ handleToggle }) => {
  const [isPaused, setIsPaused] = useState(false)

  const toggleSwitch = () => {
    setIsPaused((prev) => !prev)
    // call the toggle
    handleToggle()
  }

  return (
    <button className={`switch-btn ${isPaused ? 'slide' : ''}`} onClick={toggleSwitch}>
      {/* positioned space around  to be just off the end */}
      <span>play</span>
      <span>pause</span>
      {/* animated by 50% so left hand is in the center  */}
      <span className="switch"></span>
    </button>
  )
}

export default SwitchButton
