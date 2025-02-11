import React, { useState } from "react";
import * as _ from 'lodash';
import { Link } from "react-router-dom";
import PortpolioPopup from "../PortfolioPage/PortfolioPopup";
import Video from './Video'
import FilterAndExplainText from "./FilterAndExplainText";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 450; 

const AllProjects = ({ projectsMetadata, sectionTitle, sectionSubtitle, windowWidth, selectedProject, setSelectedProject }) => {

  const [filterTech, setFilterTech] = useState('all')
  const [filterProjectType, setFilterProjectType] = useState('all')

  const selectedProjectsMetadata = filterTech === 'all' && filterProjectType === 'all'
    ? projectsMetadata 
    : filterTech === 'all' && filterProjectType !== 'all'
    ? projectsMetadata.filter(d => d.projectTypeArray.includes(filterProjectType))
    : filterTech !== 'all' && filterProjectType === 'all'
    ? projectsMetadata.filter(d => d.toolsArray.includes(filterTech))
    : projectsMetadata

  // const selectedProjectsMetadata = projectsMetadata

  return (
    <>
      <div style={ selectedProject ? { opacity: 0.1, pointerEvents: 'none' } : {}}>
        <div className="title-container" id="portfolio__projects-container-styles">
          <div className="title-text large-text" id="portfolio__projects-text-styles">
            {sectionTitle}
          </div>
          
        </div>
        <div class='section-subtitle'>
          <FilterAndExplainText 
            filterTech={filterTech} 
            setFilterTech={setFilterTech} 
            filterProjectType={filterProjectType}
            setFilterProjectType={setFilterProjectType} 
          />  
        </div>
        <div className="clarifying-message">Click on each image for details.</div>

        {/* Large projects */}
        <div className="portfolio-grid">
          {
            selectedProjectsMetadata.filter(d => d.size === 'full').map(project => ( 
              <div className='portfolio-grid-entry-wrapper'>
                <div 
                  key={project.id} 
                  className={`portfolio-grid-entry ${project.size}`}
                  style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
                  >

                  {project.videoUrl ? <Video videoUrl={project.videoUrl} /> : ''}

                  <button className="portfolio-grid-btn full-project noSelect" >
                    <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                    <br/>
                    {
                     ['tdb-companies-graph', 'us-elections-2024-reuters'].includes(project.id ) ? 
                      <Link to={`/portfolio/${project.id}`} ><span className="border-button full-project-btn noSelect">about</span> </Link>
                      : project.hasPage ? 
                      <span 
                        className="border-button full-project-btn noSelect" 
                        onClick={() => setSelectedProject(project)}>
                          about
                      </span> 
                      : 
                      <a href={project.websiteUrl} target="_blank" className="noSelect">
                        <span className="border-button full-project-btn noSelect">view</span>
                      </a>
                    }             
                  </button>
                </div> 
                {
                  project.size === 'full' &&
                  <div className='wrapper-project-details'>
                    <h3 className="project-details project-title">{project.title}</h3>   
                    <p className="project-details project-client">{project.client}</p>
                    <p className="project-details project-tools">🔧 {project.tools}</p>  
                    <p className="project-details project-awards">
                      {
                        project.awards ?
                        <> 🏆 {project.awards} </> :
                        <span className="no-awards"> - </span>
                      }
                    </p>
                  </div> 
                }     
              </div>
            ))
          }
        </div>

        {/* Smaller projects */}
        <div className="portfolio-grid smaller-projects">
          {
            selectedProjectsMetadata.filter(d => d.size !== 'full').map(project => ( 
              <div className='portfolio-grid-entry-wrapper'>
                <div 
                  key={project.id} 
                  className={`portfolio-grid-entry ${project.size}`}
                  style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
                  >
                  {project.videoUrl ? <Video videoUrl={project.videoUrl} /> : ''}
                  <button className="portfolio-grid-btn full-project noSelect" >
                    <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                    <br/>
                    {
                      project.hasPage ? 
                      <span 
                        className="border-button full-project-btn noSelect" 
                        onClick={() => setSelectedProject(project)}>
                          about
                      </span> 
                      : 
                      <a href={project.websiteUrl} target="_blank" className="noSelect">
                        <span className="border-button full-project-btn noSelect">view</span>
                      </a>
                    }             
                  </button>
                </div>    
              </div>
            ))
          }
        </div>

      </div>
      {
        selectedProject && 
        <div className='popup-wrapper'>
          <PortpolioPopup project={selectedProject} windowWidth={windowWidth} setSelectedProject={setSelectedProject} />
        </div>
      }
    </>
  )
};

export default AllProjects;