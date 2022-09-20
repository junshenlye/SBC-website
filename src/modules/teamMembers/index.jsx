import React from 'react'
import './style.css'
import t1 from '../../assets/img/t1.png'
import t2 from '../../assets/img/t2.png'
import t3 from '../../assets/img/t3.png'
import t4 from '../../assets/img/t4.png'


export default function index() {
    return (
        <React.Fragment>
            <div className="team container mw-100" id='team'>
                <h1 data-aos="slide-down">meet the team</h1>
					<div className="row team-row">
						<div className="col-md-3 col-sm-6 team-wrap">
							<div className="team-member text-center">
								<div className="team-img">
									<img src={t1} alt="" data-aos="zoom-in"/>
								</div>
								<h6 className="team-title" data-aos="fade">Captain.Mayhem</h6>
								<span className="job-title" data-aos="fade">Developer</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 team-wrap">
							<div className="team-member text-center">
								<div className="team-img">
									<img src={t2} alt="" data-aos="zoom-in"/>
								</div>
								<h6 className="team-title" data-aos="fade">L0wdz</h6>
								<span className="job-title" data-aos="fade">Community Manager</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 team-wrap">
							<div className="team-member last text-center">
								<div className="team-img">
									<img src={t3} alt="" data-aos="zoom-in"/>
								</div>
								<h6 className="team-title" data-aos="fade">Moon</h6>
								<span className="job-title" data-aos="fade">Marketing</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 team-wrap">
							<div className="team-member last text-center">
								<div className="team-img">
									<img src={t4} alt="" data-aos="zoom-in"/>
								</div>
								<h6 className="team-title" data-aos="fade">Mr.Dino</h6>
								<span className="job-title" data-aos="fade">Artist</span>
							</div>
						</div>
					</div>
				</div>
        </React.Fragment>)
}
