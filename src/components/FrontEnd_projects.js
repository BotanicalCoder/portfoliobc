
import React from "react";
import styled from "styled-components";
import Title from "./Title";


const FrontendProjects = () => {
  return (
    <div>
      <div>
      <Title title="MY PORTFOLIO"/> 

      </div>
      {" "}
      <Mysection className="myworks">
     
        <article className="work">
          <h2>Weather app</h2>
          <p className="work-text">
            A web app to check real time weather updates built using{" "}
            <em>HTML</em>, <em>CSS</em> and <em>JAVASCRIPT</em>.
          </p>
          <div className="langs">
            <p>
              {" "}
              <a href="https://github.com/BotanicalCoder/newyorkweather">
                Github
              </a>
            </p>
          </div>
          <h4>
            <a href="https://nyweatherbc.netlify.app">Live demo</a>
          </h4>
        </article>

        <article className="work">
          <h2>Shape generator</h2>
          <p className="work-text">
            A web app that creates selected shapes with inputed dimensions built
            using <em>React js</em> and <em>SVG</em>.
          </p>
          <div className="langs">
            <p>
              {" "}
              <a href="https://github.com/BotanicalCoder/shape-generator">
                Github
              </a>
            </p>
          </div>
          <h4>
            <a href="https://shape-generator-bc.netlify.app">Live demo</a>
          </h4>
        </article>

        <article className="work">
          <h2>Twitter ui clone</h2>
          <p className="work-text">
            A clone of the twitter feed ui clone built using <em>React js</em>{" "}
            and <em>Bootstrap</em> for responsiveness
          </p>
          <div className="langs">
            <p>
              {" "}
              <a href="https://github.com/BotanicalCoder/twitterUiClone">
                Github
              </a>
            </p>{" "}
          </div>
          <h4>
            <a href="https://twitteruiclonebc.netlify.app">Live demo</a>
          </h4>
        </article>

        <article className="work">
          <h2>Innotech</h2>
          <p className="work-text">
            A website built to facilitate the fassa innotech event.
            <br /> Built using <em>Angular</em>{" "}
          </p>
          <div className="langs">
            <p>
              {" "}
              <a href="https://github.com/BotanicalCoder/innotech">Github</a>
            </p>{" "}
          </div>
          <h4>
            <a href="https://innotechbc.netlify.app/">Live demo</a>
          </h4>
        </article>
      </Mysection>
    </div>
  );
};

const Mysection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 1em auto 2em auto;
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
    flex-wrap: wrap;
    .work {
      width: 30%;
      height: 30%;
      margin: 2em 0.5em 0em 0.5em;
      padding: 0em 1em 0.5em 1em;
    }
  }
`;

export default FrontendProjects;

