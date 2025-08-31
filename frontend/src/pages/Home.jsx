import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { useNavigate } from 'react-router-dom';
import Courses from '../pages/Courses'
import Quicklinks from '../pages/Quicklinks'

import '../styles/instructor.css'
import '../styles/home.css'

import gpcphoto from "../assets/gpc_logo/gpc_college.jpg"


function Home() {

const navigate = useNavigate();

    return (

        <>


            <div className="hero-section">


                <div className="left">


                    <h2> <span> Golden Park College </span> Offers Diploma In<br />

                        <TypeWriterEffect

                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#03317f',
                                fontWeight: 500,
                                fontSize: '2.5vw',
                            }}

                            multiText={['Computer Engineering', 'Civil Engineering', 'Health assistance', 'Electrical Engineering']}

                            loop={true}
                            reverse={true}

                        />


                    </h2>
                    <p> Golden Park College in Biratnagar offers 3-year CTEVT-affiliated degrees in Computer Engineering, Civil Engineering, Electrical Engineering, and Health Assistant. With modern facilities and a focus on practical skills, the college prepares students for successful careers in these fields.
                        Golden Park College isn’t just a place to study—it’s where your future begins with excitement and pride.
                    </p>

                    <div className="button">

                        <button onClick={()=>{navigate('/Courses')}} className='button1'> Admission</button>
                        <button onClick={()=>{navigate('/Result')}} className='button1'>Check Result</button>


                    </div>



                </div>

                <div className="right">

                    <img src={gpcphoto} alt="Gpc College" />


                </div>



            </div>



            <Courses></Courses>

            <Quicklinks />

        </>


    )
}

export default Home