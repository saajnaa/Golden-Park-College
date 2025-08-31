import { Link } from 'react-router-dom'

import '../styles/quicklinks.css'

function quicklinks() {


    return (
        <>

            <div className="quicklinks">

                <h2>Quick Links</h2>
                <div className="link">
                    <Link to='/courses'>Admission</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link>Scholarship For Diploma In Computer Engineering</Link>
                    <Link>Scholarship For Diploma In Civil Engineering</Link>
                    <Link>Scholarship For Diploma In Electrical Engineering</Link>
                    <Link>Scholarship For Diploma In Health assistance</Link>
                </div>



            </div>





        </>

    )




}

export default quicklinks