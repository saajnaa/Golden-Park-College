import React from 'react'

import { NavLink } from 'react-router-dom'

import logo from '../assets/gpc logo/gpc_logo.png'

import '../styles/navbar.css'


function Navbar() {
    return (
        <>



            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Golden Park College</span>

                </div>


                <div className="nav-links">
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='/Home'> Home </NavLink> </li>
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='/Courses'> Courses </NavLink> </li>
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='/Scholarship' > Scholarship  </NavLink></li>
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='/Result' > Result </NavLink></li>
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='/Events' > Events </NavLink></li>
                    <li className="nav-item"><NavLink className={( {isActive } ) => isActive ? " active" : "navlink"} to='Contact'> Contact </NavLink></li>
                     
                </div>

               


            </div>





        </>


    )
}

export default Navbar