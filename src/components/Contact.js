import React from "react";
import './Contact.css';
import { FaEnvelope, FaPhone} from 'react-icons/fa';

function Contact() {
    return(
        <div className="contact-container">
            <div className="contact-box">
                <h2>Contact Information</h2>
                <div className="contact-info">
                    <FaEnvelope className="icon"/>
                    <p>Email: akifcan.duman@iaau.edu.kg</p>
                </div>
                <div className="contact-info">
                    <FaPhone className="icon" />
                    <p>Phone: +996 995 285 894</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
