import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_98sn8ya', 'template_9qi6q17', form.current, {
          publicKey: 'knyHXyhyuLJyss3-T',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div className="contact">
            <div className="header">
                <h1>Contact me</h1>
            </div>
            <div className="contact-links">
            
            <a href="https://github.com/lesley-tn" target="_blank" rel="noopener noreferrer" title="Visit my GitHub">
                <img src="/img/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tzuning-huang-190689235/" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn">
                <img src="/img/linkedin.png" alt="LinkedIn" />
            </a>
        </div>
            <div className="header">
                <h2>Write me a Message:</h2>
            </div>

            <form ref={form} onSubmit={sendEmail}>
  <div className="form-row">  {/* Wrapper for Name and Email */}
    <div className="form-group">
      <label>Name</label>
      <input type="text" name="user_name" required />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input type="email" name="user_email" required />
    </div>
  </div>
  <label>Message</label>
  <textarea name="message" required />
  <input type="submit" value="Send" />
</form>


            
           
        </div>
    );
}

