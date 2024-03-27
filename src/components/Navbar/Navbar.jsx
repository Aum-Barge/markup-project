import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <Link to="/">
      <h1>Marker</h1>
      </Link>
      <Link to='/editor'>Text editor</Link>
    </div>
  )
}

export default Navbar