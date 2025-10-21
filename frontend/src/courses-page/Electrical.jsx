import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


import './courses-page.css'


function Electrical() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <h2>Diploma In Electrical Engineering</h2>

        <div className="course-intro">This curriculum of Diploma in Electrical Engineering is of three years duration with six
          semesters based on the semester system.
          Diploma in Electrical Engineering course of CTEVT is designed to produce middle level
          competent electrical workforce equipped with knowledge and skills related to the
          specialization areas of Product Design, Maintenance Engineering, Power Generation
          Engineering and Industrial Engineering under Electrical engineering so as to meet the demand
          of such workforce in the country and to contribute in the national streamline of poverty
          reduction of this country of Nepal.</div>

        <div className="eligibility">
          <span>ELIGIBILITY</span>
          <p>Secured at least grade C in Compulsory Mathematics, and Compulsory Science and Grade D+ in
            English in School leaving Certificate (SLC) examination from recognized academic institution.
          </p>


          <div className="admission-eligibility">
            <span>ADMISSION CRITERIA</span>
            <p>  Appropriate fitness required by the program
              SLC or equivalent with English, Science, and Mathematics or related TSLC
            </p>
          </div>

        </div>

        <div className="course-button">

          <button>Dawnload Syllabus</button>
          <button>admission Now </button>
        </div>


        <li>
          <h2>More Courses</h2>
          <NavLink className="navlinkDcom" to='/civil'>1. Scholarship for Diploma in Civil Engineering.</NavLink>
          <NavLink className="navlinkDcom" to='/electrical'>2. Scholarship for Diploma in Electrical Engineering.</NavLink>
          <NavLink className="navlinkDcom" to='/ha  '>3. Scholarship for Diploma in Health Assistance</NavLink>


        </li>

        <button className='gotoCourse' onClick={() => navigate("/courses")} >Go to Courses </button>

      </div>
    </>)
}

export default Electrical