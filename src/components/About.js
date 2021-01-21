
import React from "react";
import styled from "styled-components";

import Title from "./Title";

const About = () => {
  return (
    <Abtsection>
      <div id="about" />
      <Title title="ABOUT ME"></Title>

      <h3>
        MY NAMES ARE :
        <br />
        EVANS CHIBUEZE OKOCHA
      </h3>
      <p>
        I am a full stack developer proficient in the use of HTML, CSS,
        JAVASCRIPT, BOOTSTRAP, EXPRESS, REACT JS and NODE JS.
        <br />
      </p>
      <p>With knowledge of Angular and Graphql.</p>
      <p>
        To build fast responsive and scalable web app from the frontend to the
        backend
      </p>
      <p>
        <strong>Ready </strong> and <strong>willing</strong> to <em>learn </em>
        new technologies to build solutions that would make the world a better.
      </p>
    </Abtsection>
  );
};

const Abtsection = styled.section`
  width: 100%;
  background-color: #ffbaba;
  margin: 2em 0em;
  padding: 1em 1em;
  font-size: larger;
  overflow-x: hidden;

  h1 {
    margin-bottom: 1em;
  }
  span {
    margin: 0em 0em 2em 0em;
  }
`;

export default About;




