import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar'
import Introduction from './components/Introduction/Introduction'
import Myworks from './components/Myworks/Myworks'
import App from './App';
import Skill from './components/Skill/Skill';
import Aboutme from './components/Aboutme/Aboutme';
import Contactme from './components/Contactme/Contactme';
import Footer from './components/Footer/Footer';
import reportWebVitals from "./reportWebVitals";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Navbar/>
        <Introduction/>
        <Myworks />
        <Skill />
        <Aboutme />
        <Contactme />
        <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
