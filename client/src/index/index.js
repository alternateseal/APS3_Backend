import React from "react";
import Nav from "./../component/Nav";

import indexCSS from './index.module.css';

import heroImg from './../assets/hero-image-white.png';

function Index () {
    return (
        <div>

            {/* ---------------------Header--------------------- */}
            <div className={indexCSS.headerWrapper}>
                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello I am</h5>
                        <h1>Kyle</h1>
                        <p>A Strange<span></span></p>
                        <p>engineer, designer, support agent</p>

                        <div ClassName={indexCSS.social}>
                            <i className="ri-linkedin-line"></i>
                            <i className="ri-github-line"></i>
                        </div>

                        <button>CV <i className="ri-file-list-3-line"></i></button>
                    </div>
                    <div className={indexCSS.headerImage}>
                        <img src={heroImg} alt="hero-image" />

                        <div className={indexCSS.borderAnimations}></div>
                    </div>
                </div>
            </div>

            

            
        

        </div>
    );
}

export default Index;