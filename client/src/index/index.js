import React from "react";
import Nav from "./../component/Nav";

import indexCSS from './index.module.css';

import heroImg from './../assets/hero-image-white.png';

import { ReactTyped } from "react-typed";

function Index () {
    return (
        <div>

            {/* ---------------------Header--------------------- */}
            <Nav />

            <div className={indexCSS.headerWrapper}>
                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello, I am</h5>
                        <h1>Kyle</h1>
                        <p>A Strategic &nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Web Designer' , 'App Designer' , 'UI / UX Designer' , 'Full-stack Developer' , 'Database Architect' , 'API Developer' , 'Backend Engineer']}
                                    typeSpeed={40}
                                    loop={true}
                                    backSpeed={40}
                                ></ReactTyped>
                            </span>
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className={indexCSS.social}>
                            <i className="ri-linkedin-line"></i>
                            <i className="ri-github-line"></i>
                        </div>

                        <button>CV <i className="ri-file-list-3-line"></i></button>
                    </div>
                    <div className={indexCSS.headerImage}>
                        <img src={heroImg} alt="hero-image" />

                        <div className={indexCSS.borderAnimation}></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Index;