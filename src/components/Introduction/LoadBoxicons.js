// src/components/LoadBoxicons.js

import React, { useEffect } from 'react';

const LoadBoxicons = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; 
};

export default LoadBoxicons;
