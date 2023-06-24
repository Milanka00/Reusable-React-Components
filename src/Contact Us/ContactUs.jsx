import React,{useRef} from 'react'; //to send the mail
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'
import { FiMapPin,FiPhoneCall,FiMail } from "react-icons/fi";
import emailjs from '@emailjs/browser'; // install as  npm i @emailjs/browser

const ContactUs = () => {
    const form = useRef();
// function is directly from email.js
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iqk69of', 'template_xa5okfb', form.current, '-fnfSB9B5M7d2gNzO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (  
        <div>
            <div className='textcontain d-flex ms-5 me-5 text-justify flex-direction-column'>
                <h5>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting.</h5>
                
            </div>
            <hr className='hr1 d-flex ms-5 me-5'/>

            <div>
                <section className='contact d-flex justify-content-center align-items-center flex-column'>
                    <div className='content text-center'>
                        <h2>Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting</p>

                    </div>
                    <div className='maincontainer d-flex justify-content-center align-items-center mt-4 w-100'>
                        <div className='contactInfo d-flex flex-column w-50'>

                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiMapPin/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Address</h3>
                                    <p>123/1,<br/>Minuwangoda road,<br/> Galle.</p>
                                </div>
                            </div>

                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiPhoneCall/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Phone</h3>
                                    <p>077-258-5689<br/>071-258-5689</p>
                                </div>
                            </div>
 
                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiMail/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Email</h3>
                                    <p>foodbank22@gmail.com</p>
                                </div>
                            </div>


                        </div>
                        <div className='contactForm rounded'>
                            <form ref={form} onSubmit={sendEmail}>
                                <h2>Send Message</h2>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_name"}/>
                                    <span>Full Name</span>
                                </div>

                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_email"}/>
                                    <span>Email</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <textarea required={"required"} name={"message"}></textarea>
                                    <span>Type your Message..</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"submit"} value={"Send"}/>
                                </div>
                            </form>

                        </div>

                    </div>
                </section>
            </div>

           
        </div>
    );
}
 
export default ContactUs;