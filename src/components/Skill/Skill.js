import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Skill.css';
import figmalogo from '../../assets/img/figma.png';
import htmllogo from '../../assets/img/html.png';
import csslogo from '../../assets/img/css.png';

function Skill() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const goalControls = useAnimation(); // Separate controls for the goal section
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5 // Adjust this value to control when the animation triggers
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
      transition: { duration: 0.5 }
    });

    // Delay the animation of the goal section
    goalControls.start({
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 20,
      transition: { duration: 0.5, delay: 0.3 } // Delay added here
    });
  }, [isVisible, controls, goalControls]);

  return (
    <motion.div
      className="skill"
      ref={sectionRef}
      animate={controls}
      style={{ opacity: 0 }}
    >
      <h1 className="h1-style-7">MY SKILLS</h1>
      <h1 className="h1-style-8">FIGMA</h1>
      <h1 className="h1-style-9">HTML</h1>
      <h1 className="h1-style-10">CSS</h1>
      <h1 className="h1-style-11">ABOUT ME ↓</h1>
      <h1 className="h1-style-12">ABOUT ME ↓</h1>
      <h1 className="h1-style-13">ABOUT ME ↓</h1>
      <h1 className="h1-style-14">ABOUT ME ↓</h1>
      <h1 className="h1-style-15">ABOUT ME ↓</h1>
      <h1 className="h1-style-16">ABOUT ME ↓</h1>

      <motion.div
        className="goal"
        animate={goalControls}
        style={{ opacity: 0, y: 10 }} 
      >
        <p>My goal is to create visually stunning</p>
        <p>and functional digital products</p>
      </motion.div>

      <div className="figma">
        <img src={figmalogo} alt="figma" />
        <div className="html">
          <img src={htmllogo} alt="html"/>
          <div className="css">
            <img src={csslogo} alt="css"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
