import React from "react";
import "./About.css";
import AboutTextBox from "./AboutTextBox";
import AboutPhotoDecoration from "./AboutPhotoDecoration";
import AboutCVTitle from "./AboutCVTitle";
import AboutCVTimeline from "./AboutCVTimeline";
import HomeLink from "../../Reusable/HomeLink/HomeLink";
import Footer from "../Footer/Footer";


const About = ({ windowWidth, windowHeight }) => {
  return (
    <section id="about__page-container" >
      <HomeLink color="#B8B8B8" />  
      <div id="about__about-container">          
        <AboutPhotoDecoration
            scaleFactor={ 
              windowWidth > 1300 ? 1.3: windowWidth > 1100 ? 1.1 : windowWidth > 600 ? 0.95 : windowWidth > 400 ? 0.80 : 0.70
            }
            imgUrl="https://live.staticflickr.com/65535/51077543302_8c5ce50658_b.jpg"
        />
        <AboutTextBox />
      </div>
      <AboutCVTitle />
      <AboutCVTimeline windowWidth={windowWidth} windowHeight={windowHeight}/>
      <Footer colorCustom="#423E42" backgroundColorCustom="#151315" />
    </section>
  )
};

export default About;