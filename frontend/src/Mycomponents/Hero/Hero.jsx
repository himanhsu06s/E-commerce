import React from 'react';
import './Hero.css';
import hand_icon from'../Assets/hand_icon.png';
import arrow_icon from'../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <label>new</label>
                    <img src={hand_icon} alt="hand_icon"/>
                </div>
                <p>collection </p>
                <p>for everyone</p>
            </div>
            <div>
                <button className="hero-latest-btn">Latest Collection <img src={arrow_icon}  alt='arrow_icon'/></button>
                
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='hero_image'/>
        </div>
    </div>
)
}
