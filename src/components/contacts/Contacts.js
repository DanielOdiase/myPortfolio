
import { useRef,useState } from "react";
import "./contacts.css";
import emailjs from 'emailjs-com';


export default function Contacts() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const sendEmail= (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_x2mlmqp', 'template_6hxmkzi', formRef.current, 'user_9KDKV9F4FeAOWn0Qd7owN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="contactleft">
      <h4>Let's work together...</h4>
    <p> You can reach me at </p>
<div className= "contacts-link">
   <a
      id="profile-link"
      href="https://github.com/DanielOdiase"
      target="_blank"
      rel="noreferrer"
      class="btn contact-details"
      ><i className="fab fa-github"></i> GitHub</a>
    <a
     id="profile-link"
      href="https://twitter.com/DanielOdiase1"
      target="_blank"
      rel="noreferrer"
      className="btn contact-details"
       ><i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i>
       Twitter</a>
       
      </div>
      </div>
      <div className="contactright">
        <h2>Contact.</h2>
       
        <form ref={formRef} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button>Submit</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
    
  );
}