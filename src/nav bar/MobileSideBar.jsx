import { useState, useEffect, useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import data from './data'
import { useGlobalContext } from '../context/Context'

const MobileSideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  const destinationData = data[0]
  const activityData = data[1]

  const handleClose = () => {
    setIsSidebarOpen(false)
  }
  //  nested loops the same as the blog project
  return (
    <aside className={`${isSidebarOpen ? 'mobile-nav show-nav' : 'mobile-nav'} `}>
      <div className="mobile-nav-container">
        <AiFillCloseCircle onClick={handleClose} className="close-nav-icon" />

        <div className="mobile-links-container">
          <h4>{destinationData.page}</h4>
          <ul>
            {/* nested maps */}
            {destinationData.links.map((item) => {
              const activitiesArray = item.subData // subData is an array with multiple objects
              return (
                <li key={item.id} className="mobile-nav-li">
                  <span className="mobile-heading-span">{item.label}</span>
                  {/* NESTED LOOP */}
                  <ul className="mobile-nav-sub-ul">
                    {activitiesArray.map((activityItem) => (
                      <li key={activityItem.id}>{activityItem.activity}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mobile-links-container">
          <h4>{activityData.page}</h4>
          <ul>
            {activityData.links.map((item) => {
              const activitiesArray = item.subData
              // console.log(activitiesArray)
              return (
                <li key={item.id} className="mobile-nav-li">
                  {item.label}

                  {/* NESTED LOOP  */}
                  <ul className="mobile-nav-sub-ul">
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
