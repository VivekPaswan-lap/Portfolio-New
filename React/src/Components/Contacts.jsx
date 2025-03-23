import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Resume from "../Photos/Resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contacts = () => {
  const ServiceId = import.meta.env.VITE_REACT_APP_ServiceId;
  const TemplateId = import.meta.env.VITE_REACT_APP_TemplateId;
  const PublicKey = import.meta.env.VITE_REACT_APP_UserKey;

  const form = useRef();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Send, AfterSend] = useState("Send");

  function sendEmail() {
    event.preventDefault();
    AfterSend("Sending...");
    const  Data = {
        to_name:"Vivek Paswan",
        from_name:Name,
        from_email:Email,
        message:Message,
      };

      console.log(ServiceId);

    emailjs.send(ServiceId, TemplateId, Data, PublicKey)
      .then((result) => {
        AfterSend("Sent");
        setName("");
        setEmail("");
        setMessage("");
        console.log('Email sent successfully', result);
      }, (error) => {
        AfterSend("Faild");
        console.log('Error sending email', error);
      });

      HandleSendButton();
  }

  function HandleSendButton(){
    setTimeout(()=>{
       AfterSend("Send");
    },5000);
  }

  return (
    <>
      <div id="contact">
        <div id="contact-row">
          <div id="cnt-col1">
            <h1 id="cnt-h1">Contact Me</h1>
            <p>
              <a href="https://vivekpaswan7090@gmail.com">
              <FontAwesomeIcon icon={faEnvelope}  className='Icon-email-phone' style={{ color:"red"}} />
              </a>
              vivekpaswan7090@gmail.com
            </p>
            <p>
              <a href="tel:+7084958176">
               <FontAwesomeIcon icon={faPhone} className='Icon-email-phone'/>
              </a>{" "}
              7084958176
            </p>

            <div id="social">
              <a href=""></a>
              <a href="https://www.facebook.com/share/19VT4PAww4/?mibextid=wwXIfr">
                
                <FontAwesomeIcon icon={faFacebook} className='Icon' size='2x'/> 
              </a>
              <a href="">
                
                <FontAwesomeIcon icon={faTwitter} className='Icon' size='2x'/>
              </a>
              <a href="https://www.instagram.com/palrajan196?igsh=MXdjcTdicjhtNGhkbQ%3D%3D&utm_source=qr">
                 <FontAwesomeIcon icon={faInstagram} className='Icon' size='2x'/>
              
              </a>
              <a href="https://www.linkedin.com/in/rajan-pal-7146012a2">
                
                <FontAwesomeIcon icon={faLinkedin} className='Icon' size='2x'/>
              </a>
            </div>
            <div id="cnt-btn">
               <a href={Resume}> 
                <button type="button">Download CV</button>
               </a> 
            </div>
          </div>
          <div id="cnt-col2">
            <h1 id='message-Heading'>Leave a Message</h1>
            <form id="myForm" onSubmit={sendEmail}>
              <input
                type="text"
                required
                value={Name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                value={Email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)
                  
                }
              />
              <textarea
                value={Message}
                required
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" >
                {Send}
              </button>
            </form>
            {/* <form action="" onsubmit="Submit()">
            <input type="text" id="Name" placeholder="Your Name" required />
            <input type="email" id="Email" placeholder="Your Email" required/>
            <textarea name="" id="Message"  placeholder="Your Massage" rows="6" required></textarea>
            <div id="cnt-btn">
              <button id="cnt-btn" type="submit">Submit</button>
            </div>
          </form>  */}
          </div>
        </div>
      </div>
    </>
  );
};
