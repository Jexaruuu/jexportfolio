import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Introduction.css';
import LoadBoxicons from './LoadBoxicons';
import symbolimage from '../../assets/img/symbols.png';
import myavatar from '../../assets/img/myavatar.png';

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 50,
      transition: { duration: 0.5 }
    });
  }, [isVisible, controls]);

  return (
    <motion.div
      className="introduction"
      ref={sectionRef}
      animate={controls}
      style={{ opacity: 0, y: 50 }} 
    >
      <LoadBoxicons /> {}
      <p>Hello, I'm</p>
      <h1>Jexter John C. Barsana</h1>
      <p><span>BSIT - 2nd Year / Front-End Developer</span></p>

      <div className="socialmediabuttons">
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-discord-alt'></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-google'></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a></li>
        </ul>
      </div>

      <div className="undersocmedbuttons">
        <button><a href="#aboutme">KNOW MORE</a></button>
        <button><a href="#gridnavsection">SEE MY WORKS</a></button>
      </div>

      <div className="headersymbols">
        <img src={symbolimage} alt="Symbol" />
        <div className="headeravatar">
          <img src={myavatar} alt="Avatar" />
        </div>
      </div>
    </motion.div>
  );
}

export default Introduction;
