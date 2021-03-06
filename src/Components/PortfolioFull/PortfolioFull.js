import React from "react";
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import PortfolioFullProjects from "./PortfolioFullProjects";
import PortfolioFullIndividualViz from "./PortfolioFullIndividualViz";
import ObservableLink from "./Observable";
import HomeLink from "../../Reusable/HomeLink/HomeLink";
import Footer from "../Footer/Footer";

const PortfolioFull = ({ windowWidth }) => {
  return (
    <div id="portfolio-container-background">
      <section id="portfolio-container">
        <Glow />
        <HomeLink />
        <PortfolioFullProjects windowWidth={windowWidth}/>
        <PortfolioFullIndividualViz windowWidth={windowWidth} />
        <ObservableLink windowWidth={windowWidth}/>
      </section>
      <Footer colorCustom="#EBEBEB" backgroundColorCustom="#CCCCCC" />
    </div>

  )
};

export default PortfolioFull;