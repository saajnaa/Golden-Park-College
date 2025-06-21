import React from 'react'

import '../styles/navbar.css'


function Navbar() {
  return (
   <>
   
   
   
     {/* <!-- ===== Top Navigation Section ===== --> */}

    <nav >
        

        <div class="logo">

         
            <h3>Barju Youth Club</h3>
        </div>

        <div class="nav-links">

            <NavLink></NavLink>
        </div>
        <div class="mobile-navbar-btn">

            <i class="ri-menu-fill mobile-navbar-icon1" ></i>
            <i class="ri-close-fill mobile-navbar-icon2" ></i>


        </div>

       
    </nav>
   
   
   
   
   </>
  )
}

export default Navbar