import { AiOutlineCopyright } from "react-icons/ai"; 
import React from 'react'
import {Link } from 'react-router-dom'

import '../styles/footer.css'


import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'


const Footer = () => {
  return (

    <>




      <footer>

        <div className="box">

          <div className="social-link">

            <li> <Link> <FaFacebook /> </Link>  </li>
            <li> <Link>< FaWhatsapp /> </Link> </li>
            <li> <Link>< FaXTwitter /> </Link>  </li>
            <li> <Link>< FaTiktok /> </Link> </li>


          </div>

        </div>

        <div className="box">
          <p className="clg-right">
            <span> Golden Park College </span> || <AiOutlineCopyright /> All Right Reserved.||
          </p>
        </div>

        <p className="dev-sec">Developed By <Link to={`https://sajan1.com.np`} target='_blannk'> Saaj Naa</Link></p>


      </footer>








    </>

  )
}

export default Footer