import React from 'react'
import Navbar from './Navbar'
import './layout.css'

function layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout
