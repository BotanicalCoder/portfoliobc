import React from "react";
import Title from "./Title";
import styled from "styled-components";
import Myimg from "../img/avataaars.svg";

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
      <div id="portfolio"></div>
    </MyArticle>
  );
};

const MyArticle = styled.article`
  height: 100%;
  width: 100%;
  background-color: #ffbaba;
  margin-top: -1.1em;
  margin-bottom: 2em;
  margin-left: 0em;
  margin-right: 0em;
  padding: 5em 1em;
  overflow-x: hidden;
  .imgcontainer {
    background-color: #a70000;
    height: 12em;
    border-radius: 50%;
    max-width: 25%;
    margin: 6em auto 5em auto;

    padding: 5em;
    position: relative;
  }
  .img {
    height: 300px;
    margin-top: -10.5em;
    image-rendering: optimizeQuality;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 2px;
    right: 2px;
  }

  .animagous {
    margin-top: -2em;
    animation: type 5s steps(42);
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
    height: 100vh;

    .imgcontainer {
      margin-top: 15em;
      height: 16em;
    }
  }
  @media screen and (min-width: 1025px) {
    height: 100vh;
    margin-top: 0em;
    .imgcontainer {
      background-color: #a70000;
      height: 16em;
      border-radius: 50%;
      max-width: 25%;
      margin: 3.5em auto 5em auto;
      margin-bottom: 2em;
      padding: 5em;
      position: relative;
    }
  }
`;

export default Banner;
