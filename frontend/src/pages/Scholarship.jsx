import React from 'react'

import { NavLink } from 'react-router-dom'

import '../styles/Scholarship.css'

const Scholarship = () => {
  return (

<>



<div className="scholarship-container">


<h1>Scholarship For Various Programs:</h1>


<div className="scholarship-intro">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae esse impedit deserunt odit aut necessitatibus quis ullam alias, laborum molestiae aliquam accusamus nesciunt fugit beatae. Beatae magnam harum iusto nisi voluptatibus, incidunt, aperiam illo quo inventore magni placeat atque recusandae? Inventore, quisquam pariatur? Corrupti quam quos tenetur officia veritatis itaque, corporis eos commodi possimus sunt temporibus magni labore, explicabo laborum.</div>

<div className="scholarship">

<li><NavLink className="navlinks" to='/Dcom'>Scholarship For Diploma In computer Engineering</NavLink></li>
<li><NavLink className="navlinks" to='/Civil'>Scholarship For Diploma In Civil Engineering</NavLink></li>
<li><NavLink className="navlinks" to='/Electrical' >Scholarship For Diploma In electrical Engineering</NavLink></li>
<li><NavLink className="navlinks" to='/Ha'>Scholarship For Diploma In Health Assistant</NavLink></li>



</div>



<div className="scholarship-conclusion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae esse impedit deserunt odit aut necessitatibus quis ullam alias, laborum molestiae aliquam accusamus nesciunt fugit beatae. Beatae magnam harum iusto nisi voluptatibus, incidunt, aperiam illo quo inventore magni placeat atque recusandae? Inventore, quisquam pariatur? Corrupti quam quos tenetur officia veritatis itaque, corporis eos commodi possimus sunt temporibus magni labore, explicabo laborum.</div>





</div>






</>


  )
}

export default Scholarship