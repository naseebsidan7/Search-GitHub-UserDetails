import React from 'react'
import { FaGithub, FaSearch } from 'react-icons/fa'
import './navabar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
       <h2 className='app_heading'>
              Git Hub 
        </h2>
        <div>
        <FaGithub/>
         <FaSearch className='search_icon'/>
        </div>
    </div>
  )
}

export default Navbar