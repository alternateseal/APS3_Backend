import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="videos/portfolio_cube_r2.mp4" autoPlay loop muted />
            <h1>FULL STACK</h1>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    ASCEND
                </Button>
            </div>
        </div>
    )
}