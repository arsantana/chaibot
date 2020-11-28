import React from 'react'
import { Link } from 'gatsby'
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as IoIcons from "react-icons/io"
import { IconContext } from 'react-icons'
import './footer.css'

function Footer() {
  return (
  <IconContext.Provider 
    value={{ style: {color: '#b69ad3', fontSize: '30px'}}}> 
    <div className='footer'>
      <div className='footer-nav'>
        <div className='footer-links'>
          <Link to='/'>
            <AiIcons.AiFillHome />
          </Link>
        </div>
        <div className='footer-links'>
          <Link to='/404'>
            <RiIcons.RiContactsFill />
          </Link>
        </div>
        <div className='footer-links'>
          <Link to='/'>
            <IoIcons.IoMdHelpCircle />
          </Link>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Footer
