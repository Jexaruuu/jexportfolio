import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion, useAnimation } from 'framer-motion';
import Card from '../Card/Card';
import './Myworks.css';

function Myworks() {
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
      transition: { duration: 0.5 }
    });
  }, [isVisible, controls]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="Myworks">
      <motion.section
        ref={sectionRef}
        animate={controls}
        style={{ opacity: 0 }} 
      >
        <h1 className="h1-style-1">MY WORKS MY WORKS MY WORKS MY WORKS MY WORKS MY WORKS</h1>
        <h1 className="h1-style-2">MY WORKS MY WORKS MY WORKS MY WORKS MY WORKS</h1>
        <h1 className="h1-style-3">MY WORKS MY WORKS MY WORKS MY WORKS</h1>
        <h1 className="h1-style-4">MY WORKS MY WORKS MY WORKS</h1>
        <h1 className="h1-style-5">MY WORKS MY WORKS</h1>
        <h1 className="h1-style-6">MY WORKS</h1>

        <Carousel 
          responsive={responsive}
          infinite={true} 
          containerClass="carousel-container" 
          itemClass="carousel-item" 
        >
          <Card 
            imgSrc='sample.gif' 
            description='Simple HTML CSS Website ' 
          />
          <Card 
            imgSrc='sample2.gif' 
            description='E-Commerce Website'
          />
          <Card 
            imgSrc='sample3.gif' 
            description='Random Game Concept' 
          />
          <Card 
            imgSrc='sample4.gif' 
            description='HTML CSS & JAVASCRIPT Website' 
          />
          <Card 
            imgSrc='sample5.gif' 
            description='Simple Calculator' 
          />
        </Carousel>
      </motion.section>
    </div>
  );
}

export default Myworks;
