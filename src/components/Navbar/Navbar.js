import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './Navbar.css'; 
import profileImage from '../../assets/img/Profile.jpg';

const Navbar = () => {
    const [textIndex, setTextIndex] = useState(0);
    const { scrollYProgress } = useScroll();
    const texts = ["I.T Student", "Good Guy", "Simple Person", "Hev Abi Enjoyer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 2500); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <nav>
            <div className="navigation">
                <img src={profileImage} alt="Profile" /> 
                <h1>Jexworldwide<br /> Portfolio</h1>
                <p>{texts[textIndex]}</p> 
            </div>
            <div className="navlinks">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="#aboutme">ABOUT ME</a></li>
                </ul>
            </div>
            <div className="navbutton">
                <button>MORE HERE</button>
            </div>

            {}
            <motion.div
                className="scroll-progress-bar"
                style={{
                    scaleX: scrollYProgress, 
                    transformOrigin: '0%',
                }}
            />
        </nav>
    );
}

export default Navbar;
