import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Projects = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100vh", autohide: true }}>
      <div className="page">
        <div className="header-gradient"></div>
        <div className="container">
          <div className="projects">
            <h1>Projecten</h1>
            <div className="project">
              <div className="image"></div>
              <div className="text">
                <h2>SOCIAL</h2>
                <div className="imageMobile"></div>
                <p>Zelfstudie • 28-01-2022</p>
                <p>ReactJS • Sanity • TailwindCSS</p>
                <p className="projectText">
                  SOCIAL is een social media app waarmee gebruikers foto’s
                  kunnen delen. Elke foto is een “Pin”. Pins kunnen worden
                  opgeslagen, gedownload en er kunnen comments op gepost worden.
                  Dit project is gebaseerd op een tutorial van YouTube. Ik heb
                  deze tutorial gevolgd om mijn vaardigheden in ReactJS naar een
                  hoger niveau te brengen. Daarnaast ben ik door dit project
                  voor het eerst in aanraking gekomen met Sanity, een kant en
                  klare backend die je alleen maar zelf hoeft in te richten. Ook
                  TailwindCSS is een first voor mij. Deze CSS library maakt het
                  stylen van je applicatie een stuk simpeler en minder
                  tijdrovend.
                </p>
                <span
                  onClick={() => window.open("SOCIAL.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meer over dit project (PDF)
                </span>
                <p>
                  <span
                    onClick={() =>
                      window.open("https://social.jordifranssen.com/")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live DEMO
                  </span>
                </p>
              </div>
            </div>
            <div className="project projectLeft">
              <div className="text">
                <h2>Projectname</h2>
                <div className="imageMobile"></div>

                <p>Opdrachtgever • 01-01-2022</p>
                <p>Design • Front-end • Backend</p>
                <p className="projectText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <span
                  onClick={() => window.open("my-cv.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meer over dit project (PDF)
                </span>
              </div>
              <div className="image"></div>
            </div>
            <div className="project">
              <div className="image"></div>
              <div className="text">
                <h2>Projectname</h2>
                <div className="imageMobile"></div>

                <p>Opdrachtgever • 01-01-2022</p>
                <p>Design • Front-end • Backend</p>
                <p className="projectText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <span
                  onClick={() => window.open("my-cv.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meer over dit project (PDF)
                </span>
              </div>
            </div>
            <div className="project projectLeft">
              <div className="text">
                <h2>Projectname</h2>
                <div className="imageMobile"></div>

                <p>Opdrachtgever • 01-01-2022</p>
                <p>Design • Front-end • Backend</p>
                <p className="projectText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <span
                  onClick={() => window.open("my-cv.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meer over dit project (PDF)
                </span>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Projects;
