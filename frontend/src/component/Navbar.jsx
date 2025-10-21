import React from 'react'

import { NavLink , useNavigate} from 'react-router-dom'
import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'

import Contact from '../pages/Contact'

import logo from '../assets/gpc_logo/gpc_logo.png'

import '../styles/navbar.css'


function Navbar() {


    const [toggle, settoggle] = useState(false)


    const handleclick = () => {


        settoggle(!toggle)



    }

    // ==========Navigation ============
const Navigate = useNavigate()


    return (
        <>



            <div className="nav">
                <div onClick={()=>Navigate('/')} className="logo">
                    <img src={logo} alt="" />
                    <span>Golden Park College</span>

                </div>

                <div className={toggle ? "mobile-menu" : ""}>
                    <div className="nav-links">

                         <li className="nav-item"><NavLink onClick={() => settoggle(false)} className={({ isActive }) => isActive ? " active" : "navlink"} to='/Courses'> Courses </NavLink> </li>
                        <li className="nav-item"><NavLink onClick={() => settoggle(false)} className={({ isActive }) => isActive ? " active" : "navlink"} to='/Scholarship' > ScholarShip  </NavLink></li>
                        <li className="nav-item"><NavLink onClick={() => settoggle(false)} className={({ isActive }) => isActive ? " active" : "navlink"} to='/Result' > Check Result </NavLink></li>
                        <li className="nav-item"><NavLink onClick={() => settoggle(false)} className={({ isActive }) => isActive ? " active" : "navlink"} to='Gallery'> Gallery </NavLink></li>
                        <li className="nav-item"><NavLink onClick={() => settoggle(false)} className={({ isActive }) => isActive ? " active" : "navlink"} to='Contact'> Contact </NavLink></li>

                    </div>
                </div>
                <button onClick={handleclick} className="mobile-nav-icon">

                    <GiHamburgerMenu />

                </button>


            </div>





        </>


    )
}

export default Navbar