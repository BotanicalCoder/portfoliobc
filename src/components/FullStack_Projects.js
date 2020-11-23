import React from "react";
import Title from "./Title";
import styled from "styled-components";

const FullStackProjects = () => {
  return (
    <>
      {" "}
      <Title title="MY FullStack Projects"> </Title>
      <Mysection className="myworks">
        <div className="work">
          <h2>coming soon</h2>
          <p className="work-text">
            I did this to achieve this using react
            <br /> so psched to be doing this.
          </p>
          <div className="langs">
            <p>languages :</p>
            <span>Test</span>{" "}
          </div>
          <h4>Live demo</h4>
        </div>
      </Mysection>
    </>
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
  width: 100%;
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
