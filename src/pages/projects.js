import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Projects = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100vh", autohide: true }}>
      <div className="page">
        <div className="container">
          <div className="row">
            <h3>This is the projects page</h3>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Projects;
