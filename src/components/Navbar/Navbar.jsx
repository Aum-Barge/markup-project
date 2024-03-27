import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <Link to="/">
      <h1>Marker</h1>
      </Link>
      <a href='/editor'>Text editor</a>
    </div>
  )
}

export default Navbar