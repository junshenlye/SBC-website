import React, { useState } from 'react'
import './style.css'
import headerMain from '../../assets/img/headerMain.svg'
import TopNavigation from '../../components/TopNavigation'
import MobileNavigation from '../../components/MobileNavigation'


export default function Index() {

    const [showMenu, setShowMenu] = useState(false);

    function handleToggle() {
        setShowMenu((prev) => !prev);
    }

    function handleCloseMobileMenu() {
        setShowMenu(false);
    }

    return (
        <React.Fragment>
            <div className="header container mw-100">
                <div className='overlay'></div>
                <div className="row header-row">
                    <TopNavigation showMenu={showMenu} handleToggle={handleToggle} />
                    {showMenu ? (
                        <MobileNavigation handleCloseMobileMenu={handleCloseMobileMenu} />
                    ) : null}
                    <div className="col-md-6 header-left">
                        <h1 className="glitch">Space boy club</h1>
                        <h3 data-aos="slide-up">Launching sequence STARTIng 3, 2, 1....</h3>
                        {<button data-aos="fade" className="download-btn" onClick={() => window.open("https://www.jpg.store/collection/spaceboyclub")}>JPG.Store<i className="fa-solid fa-arrow-right"></i></button>}
                        {/*<a data-aos="fade" className="download-btn" href="#about">Explorer <i className="fa-solid fa-arrow-right"></i></a>*/}
                    </div>
                    <div className="col-md-6 header-right">
                        <img src={headerMain} alt='' className='animate__animated animate__bounceInRight animate__slow' />
                    </div>
                </div>
            </div>
        </React.Fragment>)
}
