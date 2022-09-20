import React from 'react'
import './style.css'
import r1 from '../../assets/img/r1.svg'
import r2 from '../../assets/img/r2.svg'
import r3 from '../../assets/img/r3.svg'
import r4 from '../../assets/img/r4.svg'


export default function index() {
    return (
        <React.Fragment>
            <div className="roaddmap container mw-100" id='roadmap'>
                <h1 data-aos="slide-right">ROADMAP</h1>
                <div className="container-roadmap">
                    <div
                        className="timeline-block timeline-block-right"
                    >
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <img src={r1} alt='' data-aos="flip-right"/>
                            <h3 data-aos="fade">25%</h3>
                            <p data-aos="fade-right">• Successfully release 3333 SpaceBoy<br></br><br></br>
                            </p>
                        </div>
                    </div>

                    <div
                        className="timeline-block timeline-block-left"
                    >
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <img src={r2} alt='' data-aos="flip-right"/>
                            <h3 data-aos="fade">50%</h3>
                            <p data-aos="fade-left">• SBC Token of Appreciation Distribution<br></br><br></br><br></br></p>
                        </div>
                    </div>

                    <div
                        className="timeline-block timeline-block-right"
                    >
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <img src={r3} alt='' data-aos="flip-right"/>
                            <h3 data-aos="fade">75%</h3>
                            <p data-aos="fade-right">• Youtube Channel Documentary<br></br><br></br></p>
                        </div>
                    </div>

                    <div
                        className="timeline-block timeline-block-left"
                    >
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <img src={r4} alt='' data-aos="flip-right"/>
                            <h3 data-aos="fade">100%</h3>
                            <p data-aos="fade-left">• ??? SpaceFriends NFT Distribution<br></br><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
