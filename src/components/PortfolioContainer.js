import React from "react";

import FrontendProjects from "./FrontEnd_projects";
import FullStackProjects from "./FullStack_Projects";

const PortfolioContainer = () => {
  return (
    <div id="portfolio">
      
      <div>
        <FrontendProjects />
      </div>

      <div>
        <FullStackProjects />
      </div>
    </div>
  );
};

export default PortfolioContainer;
