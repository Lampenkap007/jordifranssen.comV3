import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as TimeLine } from "../assets/timeline.svg";

const About = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100vh", autohide: true }}>
      <div className="page">
        <div className="header-gradient"></div>
        <div className="container">
          <div className="image"></div>
          <div className="text-left">
            <div>
              <h1>Over mij</h1>
              <p>
              Mijn naam is Jordi, ik ben een creatieve student en studeer ICT&Media bij Fontys Hogescholen in Eindhoven. Moderne, gebruiksvriendelijke websites ontwerpen én bouwen vind ik erg gaaf om te doen. Daarom specialiseer ik me binnen mijn opleiding in webdesign en front-end development. In het voorjaar van 2024 ben ik klaar met mijn studie. Daarna ben ik van plan om aan de slag te gaan als webdesigner en webdeveloper.
              </p>
            </div>
          </div>
          <TimeLine />
        </div>
      </div>
    </Scrollbars>
  );
};

export default About;
