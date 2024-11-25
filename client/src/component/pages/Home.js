import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';

function Home() {
    return (
        <div>
           <HeroSection />
           <About />
        </div>
    );
}

export default Home;