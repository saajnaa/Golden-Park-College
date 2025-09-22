import React from 'react'
import { useNavigate } from 'react-router-dom'


import Instructor from '../pages/Instructor'



import '../styles/courses.css'

import dcomIMG from '../assets/images/f-computer/f-computer2.jpg'
import civilIMG from '../assets/images/f-civil/f-civil1.jpg'
import ElectricalIMG from '../assets/images/f-electrical/el4.jpg'
import haIMG from '../assets/images/f-health/f-health2.jpg'



const courses = [


  {

    "id": 1,
    "image": dcomIMG,
    "Name": "Computer",
    "navigate":"/Dcom",
    "description": " Diploma In Computer Enginnering is a 3 Years of Courses. Affiliated to ..... "
  },


  {

    "id": 2,
    "image": civilIMG,
    "Name": "Civil",
    "navigate":"/Civil",
    "description": " Diploma In civil Enginnering is a 3 Years of  Program. Affiliated to...... "


  },


  {

    "id": 3,
    "image": ElectricalIMG,
    "Name": "Electrical",
    "navigate":"/Electrical",
    "description": "Diploma in Electrical Engineering Is a 3 Years Of Courses. Which affiliated To........"


  },




  {

    "id": 4,
    "image": haIMG,
    "Name": "Health Assistant",
    "navigate":"/Ha",
    "description": " Diploma In Health Assistance is a 3 Years Of Courses. Which is affiliated To..... "

  }

]


const Courses = () => {

const navigateToPage = useNavigate();

  return (
    <>

      <div className="courses-container">

        <h2 className='h2'> Our Courses</h2>

        <div className='courses-section'>


          {courses.map(({ id, image, Name, navigate, description }) => {



            return (

              <div key={id} className="course">

                <img src={image} alt="" />
                <p> {Name} </p>
                <div className='desc'>{description}</div >
                <div className="buttoncourse">
                  <button onClick={()=>{navigateToPage(navigate)}}  >Learn More</button>

                  <button>Apply</button>
                </div>

              </div>

            )
          }



          )}



        </div>


      </div>

      {/* instructor section */}

      <Instructor />
    </>
  )
}

export default Courses