import React from 'react'
import './style.css'
import logo from "../../assets/img/logo.png";

export default function index(props) {
    return (
        <React.Fragment>
            <div className="navbar">
                <a className="logo-text">
                    <img src={logo} className="logo" />
                    SPACEBOYCLUB
                </a>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="./#">Home</a>
                        </li>
                        <li>
                            <a href="./#about">About</a>
                        </li>
                        <li>
                            <a href="./#roadmap">Roadmap</a>
                        </li>
                        <li>
                            <a href="./#team">Team</a>
                        </li>
                        <li>
                            <a href="./#faq">FAQ's</a>
                        </li>
                        <li>
                            <a href="./#community">Community</a>
                        </li>
                    </ul>
                </div>
                <div
                    className={props.showMenu ? "nav-hamburger open" : "nav-hamburger"}
                    onClick={props.handleToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </React.Fragment>
    )
}
