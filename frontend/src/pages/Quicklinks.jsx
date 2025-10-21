import { Link } from 'react-router-dom'

import '../styles/quicklinks.css'

function quicklinks() {


    return (
        <>

            <div className="quicklinks">

                <h2>Quick Links</h2>
                <div className="link">
                    <Link className='links'  to='/courses'>Admission</Link>
                    <Link className='links'  to='/gallery'>Gallery</Link>
                    <Link className='links' to='/Dcom' >Scholarship For Diploma In Computer Engineering</Link>
                    <Link className='links' to='/Civil' >Scholarship For Diploma In Civil Engineering</Link>
                    <Link className='links' to='/Electrical' >Scholarship For Diploma In Electrical Engineering</Link>
                    <Link className='links' to='/Ha' >Scholarship For Diploma In Health assistance</Link>
                </div>



            </div>





        </>

    )




}

export default quicklinks