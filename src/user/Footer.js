import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-body">
            <div class="footer-container">
                <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>Information about the website or company.</p>
                </div>
                <div class="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div class="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form id="contactForm" action="#">
                        <input type="email" name="email" placeholder="Your Email Address" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
         </div>
        

    );
}

export default Footer;
