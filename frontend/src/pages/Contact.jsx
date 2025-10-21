import React from 'react'
import { useForm } from 'react-hook-form'
import "../styles/contact.css"

function Contact() {

  const {

    register,
    handleSubmit,
    formState: { errors },

  } = useForm();


  const onSubmit = (data) => {

    console.log(data)

  }



  return (

    <>


      <div className="form-section">
        <h2>Contact Golden Park College</h2>
        <form onSubmit={handleSubmit(onSubmit)}>



          <label htmlFor="text">Name:</label>
          <input  {...register("name", { required: true })} type="text" name="text" placeholder='your name' />

          <label htmlFor="email"> Your Email:</label>
          <input   {...register("email", { required: true })} type="email" name="email" placeholder='your email' />

          <label htmlFor="message">Your Query:</label>
          <input id='message'  {...register("message", { required: true })} type="message" name="message" placeholder='write message' />

          <div className="submit">
            <input id='submit' type="submit" value="submit" />
          </div>

        </form>

      </div>

 

    </>

  )
}

export default Contact;