import { useState, useEffect, useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import data from './data'
import { useGlobalContext } from '../context/Context'

const MobileSideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  const destinationData = data[0]
  const activityData = data[1]

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('sidebar-open')
    }
  }, [isSidebarOpen])

  const handleClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <aside
      className={`mobile-nav-aside ${
        isSidebarOpen ? 'mobile-nav show-nav' : 'mobile-nav'
      }`}
    >
      {/* Rest of your component stays the same */}
      <div className='mobile-nav-container'>
        <AiFillCloseCircle onClick={handleClose} className='close-nav-icon' />

        <div className='mobile-links-container'>
          <h4>{destinationData.page}</h4>
          <ul>
            {destinationData.links.map((item) => {
              const activitiesArray = item.subData
              return (
                <li key={item.id} className='mobile-nav-li'>
                  <span className='mobile-heading-span'>{item.label}</span>
                  <ul className='mobile-nav-sub-ul'>
                    {activitiesArray.map((activityItem) => (
                      <li key={activityItem.id}>{activityItem.activity}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='mobile-links-container'>
          <h4>{activityData.page}</h4>
          <ul>
            {activityData.links.map((item) => {
              const activitiesArray = item.subData
              return (
                <li key={item.id} className='mobile-nav-li'>
                  {item.label}
                  <ul className='mobile-nav-sub-ul'>
                    {activitiesArray.map((item) => {
                      return <li key={item.id}>{item.activity}</li>
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default MobileSideBar
