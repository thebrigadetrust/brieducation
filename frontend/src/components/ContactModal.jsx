import React from "react";
import "./ContactModal.css";
export default function ContactModal({ onClose }) {
    return (
        <div className="contact-container contact-two-column">

            <div className="contact-box">
                <h2>Email</h2>
                <p><a href="mailto:thebrigadetrust@gmail.com">thebrigadetrust@gmail.com</a></p>
                <p><a href="mailto:founder@brieducation.org.in">founder@brieducation.org.in</a></p>
    
                <h2>Mobile Number</h2>
                <p>+91 9515854020</p>
                <p>+91 6302024306</p>
                
            </div>

            <div className="contact-box">
                <h2>Office Address:</h2>
                <p>a) Planning Unit :</p>
                <p> Brigade Education Trust,Sai Towers,Chandragiri Colony,Safilguda,Hyderabad 500056.</p>
                <p>        </p>
                <p>b) Field Centre : </p>
                <p> 12 E,Road No.2 Arunodaya Nagar, Nagole,Hyderabad 500068.</p>
                
            </div>

        </div>
    );
}
