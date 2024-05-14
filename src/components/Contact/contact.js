import React, { useRef } from "react";
import './contact.css';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact=()=>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_arugjav', 'template_hthkem8', form.current, {
        publicKey: 'VwhtWP80-tK5lsJH7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
      <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="your name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message"   rows="5" placeholder="Your Message"></textarea>
                <button  type="submit" value="send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={instagramIcon} alt="instagramIcon" className="link"/>
                </div>
            </form>
        </div>
      </section>
    );
}

export default Contact;