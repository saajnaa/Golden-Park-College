import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing image

import instructor1 from '../assets/images/teacher/instructor1.jpg'
import instructor2 from '../assets/images/teacher/instructor2.jpg'
import instructor3 from '../assets/images/teacher/instructor3.jpg'
import instructor4 from '../assets/images/teacher/instructor4.jpg'
import instructor5 from '../assets/images/teacher/instructor5.jpg'
import instructor6 from '../assets/images/teacher/instructor6.jpg'
import instructor7 from '../assets/images/teacher/instructor7.jpg'
import instructor8 from '../assets/images/teacher/instructor8.jpg'
import instructor9 from '../assets/images/teacher/instructor9.jpg'
import instructor10 from '../assets/images/teacher/instructor10.jpg'
import instructor11 from '../assets/images/teacher/instructor11.jpg'


function Instructor() {
  return (


    <>



      {/* College Instructors */}

      <div className="instructors">
        <h2> Our Instructors</h2>

        <div className="instructor-section">

          <Stack direction="row" spacing={2}>
            <Avatar alt="instructor1" src={instructor1} />
            <Avatar alt="instructor2" src={instructor2} />
            <Avatar alt="instructor3" src={instructor3} />
            <Avatar alt="instructor4" src={instructor4} />
            <Avatar alt="instructor5" src={instructor5} />
            <Avatar alt="instructor6" src={instructor6} />
            <Avatar alt="instructor7" src={instructor7} />
            <Avatar alt="instructor8" src={instructor8} />
            <Avatar alt="instructor9" src={instructor9} />
            <Avatar alt="instructor10" src={instructor10} />
            <Avatar alt="instructor11" src={instructor11} />

          </Stack>

          <p>Meet our dedicated instructors who are here to guide you through your learning journey. and help you achieve your academic goals.</p>

        </div>


      </div>






    </>

  )
}

export default Instructor