import React from 'react'

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

            <li> <FaFacebook /> </li>
            <li> < FaWhatsapp /></li>
            <li> < FaXTwitter /> </li>
            <li> < FaTiktok /> </li>


          </div>

        </div>

        <div className="box">
          <p className="clg-right">
            <span> Golden Park College</span> ||All Right Reserved.||
          </p>
        </div>

        <p className="dev-sec">Developed By <a href="www.sajan1.com.np/">Saaj Naa</a></p>


      </footer>








    </>

  )
}

export default Footer