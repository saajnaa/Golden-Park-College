import React, { Fragment } from 'react'
 

import '../courses-page/courses-page.css'

function Civil() {
  return (
    < React.Fragment>

      <div className="main">

        <h2>Diploma In Civil Engineering</h2>


        <p className='course-intro'> Civil Engineering is one of the prominent and popular disciplines within engineering. Many
          people in the developed countries, developing countries and under developed countries have
          given emphasis for the broader application of Civil Engineering.
          This field has been helping the world for the all-round physical infrastructure development and
          it has been creating wage and self employment opportunities both in public and private
          sectors.
          Diploma in Civil Engineering program of CTEVT is designed with the purpose of producing
          middle level technical workforce equipped with knowledge and skills related to the field of Civil
          Engineering so as to meet the demand of such workforce in the country to contribute in the
          national economic development of Nepal. The knowledge and skills incorporated in this
          curriculum will be helpful to deliver the individual needs as well national needs in the field of
          Civil Engineering</p>



        <div className="eligibility">
          <span>ELIGIBILITY</span>
          <p>Secured at least grade C in Compulsory Mathematics, and Compulsory Science and Grade D+ in
            English in School leaving Certificate (SLC) examination from recognized academic institution.
          </p>
        </div>


        <div className="admission-eligibility">
          <span>ADMISSION CRITERIA</span>
          <p> SLC Pass or SEE with minimum C grade in Compulsory Mathematics & Science and D+ in English.
            TSLC in Computer Engineering with minimum 67.00%.
          </p>
        </div>



        <button>Dawnload Syllabus</button>

        <button>admission Now </button>

      </div>


    </React.Fragment>
  )
}

export default Civil;