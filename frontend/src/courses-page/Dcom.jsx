import React, { Fragment } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';

import './courses-page.css'

function Dcom() {

  const navigate = useNavigate()

  return (
    < React.Fragment>

      <div className="main">

        <h2>Diploma In Computer Engineering</h2>


        <p className='course-intro'> Diploma in Computer Engineering curriculum is designed to produce middle level skilled technician updated with latest skills of computer and information technology with a view
          to cope with the emerging technological change. Many people in the developed, developing
         and under developed countries have been given emphasis for the broader application of
          computer. Computer Engineering has been contributing the world for the overall development
          and creating job or employment opportunities in both public and private sectors.
          This curriculum is designed to foster knowledge and skills to the technician required by the
          computer engineering and information technology related industries and organizations in
          Nepal. The Diploma in Computer Engineering program extends over three years. Each year is
          divided into two semesters. There are six semesters in total within the period of three years.</p>

        <div className="objective"> <span>Objectives:</span>
          <h3>  After the completion of this program, the graduates will be enabled to:</h3>
          <p> 1. Prepare competent computer workforce/human resources that could provide services
            in public and private organizations as required <br /><br />
            2. Handle Web Technology & Programming, Management Information System,
            System Analysis and Design, Visual Programming, Multimedia Technology, Internet
            Technology, Data Mining, Computer Graphics etc. <br /><br />
            3. Management of Database. <br /><br />
            4. Repair and Maintenance of Computer. <br /><br />
            5. Applied Telecommunication skills. <br /><br />
            6. Prepare such technical workforce who will demonstrate positive attitude and respect to
            the profession and socio-cultural values. <br /><br />
            7. Reduce the dependence on foreign technicians. <br /><br />
            8. Create self employment/enterprise  </p></div>


        <div className="eligibility">
          <span>ELIGIBILITY</span>
          <p>Secured at least grade C in Compulsory Mathematics, and Compulsory Science and Grade D+ in English in School leaving Certificate (SEE  ) examination from recognized academic institution.
          </p>
        </div>


        <div className="admission-eligibility">
          <span>ADMISSION CRITERIA</span>
          <p> SLC Pass or SEE with minimum C grade in Compulsory Mathematics & Science and D+ in English. TSLC in Computer Engineering with minimum 67.00%.
          </p>
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


    </React.Fragment>
  )
}

export default Dcom;