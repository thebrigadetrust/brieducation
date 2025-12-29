import React from "react";
import "./ContactModal.css";
export default function ContactModal({ onClose }) {
    return (
        <div className="contact-container contact-two-column">

            <div className="contact-box">
                <h2>Email</h2>
                <p><a href="mailto:thebrigadetrust@gmail.com">thebrigadetrust@gmail.com</a></p>
                <p><a href="mailto:support@brigadetrust.org">support@brigadetrust.org</a></p>
                <p><a href="mailto:info@brigadetrust.org">info@brigadetrust.org</a></p>
                <h2>Mobile Number</h2>
                <p>+91 63020 24306</p>
                <p>+91 99888 77665</p>
                <p>+91 91234 56789</p>
            </div>

            <div className="contact-box">
                <h2>Office Address</h2>
                <p>Brigade Education Trust,</p>
                <p>Sai Towers</p>
                <p>Chandragiri Colony</p>
                <p>Safilguda</p>
                <p>Hyderabad 500056,</p>
            </div>

        </div>
    );
}
