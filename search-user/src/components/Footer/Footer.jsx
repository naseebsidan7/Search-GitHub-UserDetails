import React from 'react'
import './footer.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer_container'>
         
           <div className='brand'>
           <a href="https://github.com/naseebsidan7?tab=repositories" target='_blank'>
           &#169; <span className='brand_name'> S i d a n</span>
           </a>
           </div>
           <div className='footer-links_icons'>
                           <a href="https://www.linkedin.com/in/naseeb-sidan-16b371267/" target='_blank'><FaLinkedin  /></a>
                           <a href="https://github.com/naseebsidan7?tab=repositories"  target='_blank'> <FaGithub/></a>
                          <a href="https://www.instagram.com/sidan07_/"  target='_blank' > <FaInstagram /></a>
           </div>
    </div>
  )
}

export default Footer