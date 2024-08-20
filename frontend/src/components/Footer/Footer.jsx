import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>Mango</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi a architecto, pariatur placeat corrupti libero facilis ex iusto cupiditate, blanditiis officiis, commodi voluptatem! Hic, repellendus. Quaerat repellendus explicabo eligendi!</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />

                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 987463201</li>
                        <li>Sample@mango.com</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className='footer-copyright'>Copywrite 2024 © Magnobytes.com - All Right Reserved  </p>

        </div>
    )
}

export default Footer