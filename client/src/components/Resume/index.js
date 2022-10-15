// This page will have a link to my downloadable pdf resume
// Then it will have a list of my proficiencies on front end in one container and back end in another container

import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <h1 id="resume-title">Resume</h1>
      <div className="flex flex-wrap justify-between">
        <div className="bottom-spacing">
          <a href={require("../../assets/files/resume1.pdf").default} download>
            {" "}
            {/*I needed to add .default here to get it to download. It was showing up as empty without it */}
            <h4 className="animate-pulse" id="color-4-download">
              Download my Resume
            </h4>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="col-md-6 mr-20 pt-10">
          <h3 id="front-end-title">Front End</h3>
          <ul>
            <li>React</li>
            <li>NextJS</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>React-Bootstrap</li>
            <li>React-Router-Dom</li>
            <li>Axios</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Web APIs</li>
            <li>Third Party APIs</li>
            <li>Server Side APIs</li>
            <li>Tailwind</li>
            <li>Bulma</li>
            <li>Bootstrap</li>
            <li>Styled Components</li>
            <li>Media Queries</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="col-md-6 mr-20 pt-10">
          <h3 id="back-end-title">Back End</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Express</li>
            <li>Django</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Postgres</li>
            <li>RESTful API</li>
            <li>GraphQL/Apollo</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>Jest</li>
            <li>OOP</li>
            <li>MVC</li>
            <li>CRUD</li>
            <li>Sessions</li>
            <li>JWT</li>
            <li>CDN's Programatically</li>
            <li>Deployment</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
