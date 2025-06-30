import React from 'react'

import { useForm } from 'react-hook-form'

import "../styles/contact.css"

function Contact() {

 const {

  register,
  handleSubmit,
  formState:{ errors},

 } = useForm();






  return (

<>


      <div className="form-section">
        <h2>Send Your Query From Here...🚀</h2>
        <form onSubmit={ handleSubmit}>



          <label htmlFor="text">Name:</label>
          <input  { ...register("name" , {required:true} ) } type="text" name="text" id="text" placeholder='your name'/>

          <label htmlFor="email"> Your Email:</label>
          <input   { ...register("email" , {required:true} ) }  type="email" name="email" id="email" placeholder='your email' />

          <label htmlFor="message">Your Query:</label>
          <input   { ...register("message" , {required:true} ) }  type="message" name="message" id="message"  placeholder='write message'/>

          <div className="submit">
            <input id='submit' type="submit" value="submit" />
          </div>

        </form>

      </div>
 

</>

  )
}

export default Contact