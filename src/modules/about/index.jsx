import React from 'react'
import './style.css'
import aboutAnimation from '../../assets/img/aboutAnimation.gif'


export default function index() {
    return (
        <React.Fragment>
            <div className="about row align-items-center justify-content-center" id='about'>
                <div data-aos="slide-right" className="col-sm-5 align-items-end">
                    <img src={aboutAnimation} alt='' />
                </div>
                <div className="col-sm-7 about-area-left">
                    <h1 data-aos="slide-left">about</h1>
                    <p data-aos="fade">SBC is a collection of 3333 digital collectibles SpaceBoy NFTs — that are uniquely generated to live on the Cardano blockchain. SBC collection are done by a group of friends that are passionate to learn more about blockchain technology. Our collection objective is to deliver utilities and bring fun into the project. So ... the question remains, where will your spaceboy venture to in the floating abyss? </p>
                </div>
            </div>
        </React.Fragment>)
}
