import React from "react";
import { Link } from "react-router-dom";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 
// underline-gradient underline-padding

const PortfolioShowcasePanelRight = ({ project, windowWidth }) => {
  return (
    <div className="panel-right__wrapper">

      <div className="panel-right__text body-text-normal">
        <h2 class="panel-right__title-text medium-text"><span>{project.title}</span></h2>
        {/* <p className="panel__responsible-for-container">
          <span className="panel__bold-text">Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p> */}
        <p className="panel__tools-container">
          <span className="panel__bold-text">Tools: </span>
          <span>{project.tools}</span>  
        </p>
        <p className="panel__client-container">
          <span>{project.client}</span>
        </p>
        <button className="view-btn body-text-normal noSelect" style={{backgroundColor: project.backgroundColour, borderColor: project.backgroundColour}}>
          <a href={project.websiteUrl} target="_blank">view</a>
        </button>
        <Link to={`/portfolio/${project.id}`} >
          <button style={{borderColor: project.backgroundColour, color: project.backgroundColour}} className="about-btn body-text-normal">about</button>
        </Link>
      </div>

      <div className="panel-right__image-background" style={{backgroundColor: project.backgroundColour}}></div>
      <div className="panel-right__image" style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.imgUrl})` : `url(${project.smallImgUrl})`}}></div>
    </div>
  )
};

export default PortfolioShowcasePanelRight;