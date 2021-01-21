
import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Mytitle>
      <h1>{props.title}</h1>
      <p id="linecontainer">
        <span className="lines"></span>

        <span className="lines"></span>
      </p>
    </Mytitle>
  );
};

const Mytitle = styled.div`
 
  text-align: center;
  color: :#9e9e9e;
  h1 {
    font-size: x-large;
     font-weight:bolder;
     margin:0em;
  }
  #linecontainer {
    margin: -1.5em 0em;
  }
  .lines {
    border: 2px solid white;
    width: 15%;
    height: 3%;
    display: inline-block;
    padding: 0em;
    margin-left: 0.5em;
  }
`;

export default Title;
