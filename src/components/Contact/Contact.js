import React, { useRef } from 'react';
import './Contact.css';
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';


const Contact = () => {
  
  const form = useRef('');

 
 
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm('service_oelpy6w', 'template_z34aa6o', form.current, {
        publicKey: '4uhrQyTDVgH9FLrep',
      })
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <section className="contact" id="contact">
      
      <h2>Get In Touch</h2>
      <p>I'd love if you reached out to me. Even if it's just to say "Hey". Don't hesitate! Drop me a line and I'll get back to you ASAP!</p>
      <div className="flexCenter">
                        <a href="mailto:dayoagbato@gmail.com"> <button className="mail">
                             <IoMail size={15}/> &nbsp; dayoagbato@gmail.com
                        </button>
                        </a>
                        <a href="https://wa.link/9tk22m">  <button className="phone">
                            <FaPhone size={15}/> &nbsp; +234 814 7534 842
                        </button>  
                        </a> 
                    </div> 
      <div className="contact-form-container">
        <div className="contact-form">
          <form ref ={form} onSubmit={sendEmail}>
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                name="user_name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                name="user_email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              className="submit-btn"
              
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact