import React from 'react'
import sublinks from './data'
import { useGlobalContext } from '../context/Context'

const NavLinks = () => {
  const { pageId, setPageId } = useGlobalContext()

  return (
    <ul className='nav-links'>
      {sublinks.map((item) => {
        const { links, page, pageId } = item
        return (
          <li className='nav-li' key={pageId}>
            <button className='nav-link' onMouseEnter={() => setPageId(pageId)}>
              {page}
            </button>
          </li>
        )
      })}

      {/* <li className='nav-li'>
        <button className='nav-link'>contact</button>
      </li> */}
      {/* <li className='nav-li'>
        <button className='nav-link'>login</button>
      </li> */}
    </ul>
  )
}

export default NavLinks
