import React from 'react'

import Courses from '../pages/Courses'

import '../styles/home.css'

function Home() {
  return (
 
 <>
 
 
     <div className="hero-section">


                <div className="left">


                    <h2>Golden Park College Offers <br /><span> Diploma In Computer Engineering</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio tenetur similique unde ex nam facilis maiores, sint voluptas, laudantium asperiores recusandae exercitationem. Deserunt magnam accusantium nostrum quisquam alias sit magni.</p>

                    <div className="button">

                        <button on className='button1'> Admission</button>
                        <button on className='button1'>Check Result</button>


                    </div>



                </div>


              


            </div>


 
 <Courses></Courses>
 
 
 </>
 
 
  )
}

export default Home