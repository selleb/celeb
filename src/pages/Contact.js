import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import './styles/Contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiH3, RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8er98ji', 'template_m2d8732', form.current, '3aiVfK0GDQvMZG5eL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };


  return (
    <div className='contact-con'>

      <div className='contact'>
        <div className="contact-content">
          <div className="left-side">

            <div className="phone details">
              <AiFillPhone className='icon-c' />
              <div className="topic">Phone</div>
              <div className="text-one">(720) 263-6440</div>
           
            </div>

            <div className="email details">
              <FaEnvelope className='icon-c' />
              <div className="topic">Email</div>
              <div className="text-one">celebrityorg101@gmail.com</div>
              <div className="text-two">celebrityorg101@gmail.com</div>
            </div>
          </div>

          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any suggestion or query related to this platform, you can send a message.</p>

            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" placeholder='Enter your name' name="name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder='Enter your email' name="email" />
                <input type="hidden" placeholder='Enter your email' name="subject" value="Celeb Org" />
              </div>
              <div className="input-box message-box">
                <textarea name='message'></textarea>
              </div>
              <div className="button">
                <button type="submit"> Send Now </button>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>

  );
};

export default Contact

