
import React from "react";
import Title from "./Title";
import styled from "styled-components";

const FullStackProjects = () => {
  return (
    <div>
      {" "}
      <Title title="MY FullStack Projects"> </Title>
      <Mysection className="myworks">
        <div className="work">
          <h2>Instagram clone</h2>
          <p className="work-text">
            I built the frontend using react, bootstrap and vanilla css. 
           <br/> It was hosted on netlify with github as version control.
            <br /> The backend was built with Node.js, Express js, and MongoDB.
            <br/> It was hosted on heroku with github as version control
          </p>
          <div className="langs">
            <p>tools :</p>
            <span>NODE.js, EXPRESS, MONGODB, React</span>{" "}
          </div>
          <h4><a href="https://instagramclonebc.netlify.app">Live demo </a> </h4>
        </div>

      </Mysection>
      
      
    </div>
  );
};

const Mysection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 1em auto;
  padding: 0em;
  width: 95vw;
  font-size: larger;

  .work {
    width: 100%;
    height: 40%;
    margin-top: 1em;
    background-color: gainsboro;
    padding: 0.1em 1em;
  }

  .langs {
    font-size: large;
    font-weight: bold;
  }

  @media screen and (min-width: 780px) {
    flex-direction: row;
    .work {
      width: 100%;
      height: 30%;
      margin: 2em 0.5em 0em 0.5em;
      padding: 0em 1em 0.5em 1em;
    }
  }
`;

export default FullStackProjects;

