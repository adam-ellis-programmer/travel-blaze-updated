import React from 'react'
import sublinks from './data'
import { useGlobalContext } from '../context/Context'
import { useState, useEffect, useRef } from 'react'

const SubMenu = () => {
  // set the global context so we can mouse over outside elements and use here
  const { pageId, setPageId } = useGlobalContext()
  const submenuContainer = useRef(null)

  const [activityData, setActivityData] = useState(null)
  const [navImgOne, setNavImgOne] = useState(null)
  const [navImgTwo, setNavImgTwo] = useState(null)

  const currentNavPage = sublinks.find((item) => item.pageId === pageId)
  // console.log(currentNavPage)

  const handleActivityData = (data) => {
    const { subData, mainImg } = data
    setActivityData(subData)
    setNavImgTwo(mainImg)
    // set img null to see links
    setNavImgOne(null)
  }

  // sets image two
  const handleActivity = (item) => {
    setNavImgTwo(item.img)
  }

  // prettier-ignore
  // run once when component mounts

  //    } else if(currentNavPage?.page === 'activities'){
  // cached images in the nav using react query
  // default load images
  useEffect(() => {
     console.log(currentNavPage)
     // if the currentPage is  destination allways show this 
      if (currentNavPage?.page === 'destination') {
        setNavImgOne('https://images.unsplash.com/photo-1682695795798-1b31ea040caf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8fHww')
        setNavImgTwo('https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fHww')
     //    was else {}
     //  if current page is activities show these two
      }else if(currentNavPage?.page === 'activities'){
        setNavImgOne('https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D')
        setNavImgTwo('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D')
      }

    return () => {
      setNavImgOne(null)
      setNavImgTwo(null)
    }
  }, [pageId])

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current
    // console.log(submenu.getBoundingClientRect())
    const { top, right, left, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = e

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom) {
      setPageId(null)
    }
  }

  // pageid gets set to currentNavPage

  return (
    <div
      ref={submenuContainer}
      className={currentNavPage ? 'sub-menu show-sub-menu' : 'sub-menu'}
      onMouseLeave={handleMouseLeave}
    >
      {/* super nav headers */}
      <div className='sub-menu-inner-grid'>
        <h4 className='sub-menu-h4'>{currentNavPage?.headerData?.labelOne}</h4>
        <h4 className='sub-menu-h4'>{currentNavPage?.headerData?.labelTwo}</h4>
        <h4 className='sub-menu-h4'>
          {currentNavPage?.headerData?.labelThree}
        </h4>
      </div>

      <div className='sub-menu-inner-grid'>
        <div>
          {currentNavPage?.links?.map((link) => {
            const { id, label, subData, mainImg } = link

            return (
              <a
                onMouseEnter={() =>
                  handleActivityData({
                    subData,
                    mainImg,
                  })
                }
                className='sub-menu-link'
                key={id}
                href='http://'
              >
                {label.toUpperCase()}
              </a>
            )
          })}
        </div>
        <div>
          {/* if there is a default image show this  */}
          {navImgOne ? (
            <img className='sub-menu-img' src={navImgOne} alt='' />
          ) : (
            // second collumn
            <ul>
              {activityData?.map((item) => {
                // console.log(item)
                return (
                  <li
                    onMouseEnter={() => handleActivity(item)}
                    key={item.activity}
                    className='sub-menu-link'
                  >
                    {item.activity}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {/* third collumn  */}
        <div>
          <img className='sub-menu-img' src={navImgTwo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default SubMenu
