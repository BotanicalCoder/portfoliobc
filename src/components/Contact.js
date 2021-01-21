import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import styled from "styled-components";

import Title from "./Title";

const Contact = () => {
  return (
    <Ctcsection id="contact">
      <Title title="CONTACT ME"/>
    
     
      <p>EMAIL: eokocha0@gmail.com</p>
      <hr />
      <p>
        Twitter <FaTwitter /> : Botanicalcoder
      </p>
      <hr />
      <p>
        Github <FaGithub /> :{" "}
        <a href="https://github.com/botanicalcoder"> BotanicalCoder</a>
      </p>
      <hr />
    </Ctcsection>
  );
};

const Ctcsection = styled.section`
  width: 100%;
  overflow-x: hidden;
  h1 {
    color: #a70000;
    margin-bottom: -1em;
  }

  .lines {
    border: 2px solid #a70000;
  }
  font-size: larger;
  text-align: center;
  p {
    margin-top: 2em;
  }
  hr {
    margin: 1em;
  }
`;

export default Contact;
