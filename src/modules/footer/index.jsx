import React from 'react'
import './style.css'


export default function index() {
    return (
        <React.Fragment>
            <div className="footer container mw-100" id='community'>
                <div className="footer-top row align-items-start justify-content-center">
                    <h1 data-aos="slide-down">Community</h1>
                    <h3 data-aos="fade">Join our Official <span className='highlighted-font'>TWITTER</span> and <span className='highlighted-font'>DISCORD</span></h3>
                    <a data-aos="zoom-in" className='footer-social-link' href='https://twitter.com/SpaceBoyAdaClub' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i> JOIN OUR TWITTER</a>
                    <a data-aos="zoom-in" className='footer-social-link' href='https://discord.gg/M2gFQmzwQ2' target='_blank' rel="noreferrer"><i className="fa-brands fa-discord"></i> JOIN OUR DISCORD</a>
                </div>
                <div className="footer-bottom row align-items-center">
                    <p>copyright @ SPACEBOYCLUB</p>
                </div>
            </div>
        </React.Fragment>)
}
