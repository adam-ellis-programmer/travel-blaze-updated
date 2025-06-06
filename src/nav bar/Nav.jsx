import React from 'react'
import { FaBars } from 'react-icons/fa'
import NavLinks from './NavLinks'
import Logo from '../assets/web-logo.svg'
import { useGlobalContext } from '../context/Context'
import SubMenu from './SubMenu'
import MobileSideBar from './MobileSideBar'
const Nav = () => {
  const { pageId, setPageId, isSidebarOpen, setIsSidebarOpen } =
    useGlobalContext()

  const handleSubMenu = (e) => {
    const { target } = e
    // looks at the parent to event bubble
    // console.log(target.classList)
    if (
      !target.classList.contains('nav-link') &&
      !target.classList.contains('nav-li')
    ) {
      setPageId(null)
    }

    console.log('moused over ')
  }

  const handleToggle = () => {
    setIsSidebarOpen(true)
  }

  // to do scroll and hide submenu
  return (
    <>
      <nav onMouseOver={handleSubMenu}>
        <div className='nav-center'>
          <div className='log-box'>
            <img className='nav-logo' src={Logo} alt='' />
          </div>
          <button onClick={handleToggle} className='toggle-nav-btn'>
            <FaBars />
          </button>
          <NavLinks />
        </div>
        <MobileSideBar />
      </nav>
      {/* super nav menu */}
      <SubMenu />
    </>
  )
}

export default Nav
