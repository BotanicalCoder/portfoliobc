import React from "react";
import Title from "./Title";
import styled from "styled-components";
import Myimg from "../img/avataaars.png";

const Banner = () => {
  return (
    <MyArticle>
      <div className="imgcontainer">
        <img src={Myimg} alt="botanicalcoder" className="img" />
      </div>
      <div className="animagous">
        <Title title="The BOTANICAL ~ CODER" />
        <h6>Web Developer</h6>
      </div>
    </MyArticle>
  );
};

const MyArticle = styled.article`
  height: 100vh;
  background-color: #ffbaba;
  margin-top: -1.1em;
  margin-left: -2em;
  margin-right: -3.3em;
  padding: 5em 1em;
  .imgcontainer {
    background-color: #a70000;
    height: 16em;
    border-radius: 50%;
    max-width: 25%;
    margin: 0em auto;
    margin-bottom: 5em;
    padding: 5em;
    position: relative;
  }
  .img {
    height: 300px;
    margin-top: -9em;

    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 2px;
    right: 2px;
  }

  .animagous {
    margin-top:-2.5em;
    animation: type 4s steps(42);
    animation-timing-fuction: ease-in-out;
    overflow: hidden;
    white-space: nowrap;
  }

  @keyframes type {
    0% {
      width: 0ch;
    }
    50% {
      width: 10ch;
    }
    100% {
      width: 42ch;
    }
  }
  h6 {
    text-align: center;
    margin-top: 2em;
    font-size: large;
    font-weight: light;
  }
  @media screen and (min-width: 760px) {
    height: 75vh;
    .imgcontainer {
      margin-top: 9em;
    }
  }
  @media screen and (min-width: 1025px) {
    height: 90vh;
    .imgcontainer {
      margin-top: 5em;
    }
    .imgcontainer {
      background-color: #a70000;
      height: 16em;
      border-radius: 50%;
      max-width: 25%;
      margin: 0em auto;
      margin-bottom: 2em;
      padding: 5em;
      position: relative;
    }
  }
`;

export default Banner;
