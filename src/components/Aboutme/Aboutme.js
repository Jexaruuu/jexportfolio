import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Aboutme.css'; 

function Aboutme() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1 // Adjust this value to control when the animation triggers
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
  //test last
  return (
    <motion.div
      className="aboutme"
      ref={sectionRef}
      animate={controls}
      style={{ opacity: 0, y: 50 }} // Initial opacity and position
    >
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Delay for intro section
      >
        <h1>WHO AM I</h1>
        <p>A second-year Information Technology student at La Consolacion College in Bacolod. I’m passionate about technology and enjoy learning</p>
        <p>how computers and software work. In my free time, I like exploring new tech trends and working on small projects to improve my skills.</p>
        <p>I’m excited to continue my studies and see where my interest in IT takes me!</p>
      </motion.div>
      
      <motion.div
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4 }} 
      >
        <h1>I CREATE</h1>
        <p>I design attractive landing pages to make great first impressions online. I also help with design tasks, making sure websites and apps are user-friendly and visually appealing. Using Webflow, I build and customize websites to look good and work well on all devices. I’m always excited to learn and take on new challenges in the tech world.</p>

        <div className="project-grid">
          {[
            { className: 'box1', title: 'Portfolio', description: 'Create a personal portfolio website to showcase your projects, skills, and resume.' },
            { className: 'box2', title: 'Blog', description: 'Design and set up a simple blog with categories and posts to practice content management and layout design.' },
            { className: 'box3', title: 'Landing', description: 'Build a landing page for a fictional product or service to focus on call-to-action elements and visual appeal.' },
            { className: 'box4', title: 'Gallery', description: 'Develop an image gallery website to display and organize photos with interactive features like lightbox viewing.' },
            { className: 'box5', title: 'Store', description: 'Create a basic e-commerce site with a product catalog and shopping cart functionality.' },
            { className: 'box6', title: 'Resume', description: 'Design a digital resume website to present your skills, experience, and achievements in an interactive format.' },
          ].map((project, index) => (
            <motion.div
              key={index}
              className={`project-box ${project.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} 
            >
              <h1 className={`project-title ${project.className}-title`}>{project.title}</h1>
              <p className={`project-description ${project.className}-description`}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Aboutme;
