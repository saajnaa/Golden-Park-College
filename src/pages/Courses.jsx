import React from 'react'

import '../styles/courses.css'

import dcomIMG from '../assets/images/computer-lab/el6.jpg'
import civilIMG from '../assets/images/civil-lab/civil.jpg'
import ElectricalIMG from '../assets/images/electronics-lab/el4.jpg'
import haIMG from '../assets/images/biology-lab/bl1.jpg'


const courses = [


  {

    "id": 1,
    "image": dcomIMG,
    "Name": "Diploma In Computer Engineering",
    "description": " Diploma In Computer Enginnering is a CTEVT Program Of Duration 3 years . Diploma In Computer Enginnering is a CTEVT Program Of Duration 3 years"


  },


  {

    "id": 2,
    "image": civilIMG,
    "Name": "Diploma In Civil Engineering",
    "description": " Diploma In civil Enginnering is a CTEVT Program Of Duration 3 years .Diploma In Computer Enginnering is a CTEVT Program Of Duration 3 years"


  },


  {

    "id": 3,
    "image": ElectricalIMG,
    "Name": "Diploma In Electrical Engineering",
    "description": " Diploma In Health Engineering is a CTEVT Program Of Duration 3 years. Diploma In Computer Enginnering is a CTEVT Program Of Duration 3 years"


  },




  {

    "id": 4,
    "image": haIMG,
    "Name": "Diploma In Health Assistant",
    "description": " Diploma In Health Engineering is a CTEVT Program Of Duration 3 years. Diploma In Computer Enginnering is a CTEVT Program Of Duration 3 years"


  }

]


const Courses = () => {
  return (
    <>

      <div className="courses-container">

        <h2 className='h2'> Golden Park Collage Programs</h2>

        <div className='courses-section'>


          {courses.map(({ id, image, Name, description }) => {



            return (<div key={id} className="course">

              <img src={image} alt="" />
              <p> {Name} </p>
              <div className='desc'>{description}</div >
              <div className="button">
                <button>Learn More</button>

                <button>Apply</button>
              </div>

            </div>

            )
          }



          )}



        </div>


      </div>

    </>
  )
}

export default Courses