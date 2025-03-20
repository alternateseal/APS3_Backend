import React from "react";
import Nav from "./../component/Nav";
import resumePDF from './../assets/resume.pdf';

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
                        <p>A Strategic&nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Web Designer' , 'App Designer' , 'UI / UX Designer' , 'Full-stack Developer' , 'Database Architect' , 'API Developer' , 'Backend Engineer']}
                                    typeSpeed={100}
                                    loop={true}
                                    backSpeed={100}
                                ></ReactTyped>
                            </span>
                        </p>
                        <p></p>

                        <div className={indexCSS.social}>
                            <a href="https://www.linkedin.com/in/kyle-brunker" target="_blank" rel="noopener noreferrer">
                                <i className="ri-linkedin-line"></i>
                            </a>
                            <a href="https://github.com/alternateseal" target="_blank" rel="noopener noreferrer">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>

                        <a href={resumePDF} download target="_blank" rel="noopener noreferrer">
                            <button>
                                CV <i className="ri-file-list-3-line"></i>
                            </button>
                        </a>
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