import React from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

import Title from "./Title";

const Contact = () => {
  return (
    <Ctcsection id='contact'>
      <Title title="CONTACT ME"></Title>
      <p>PHONE NO: +23481445053272</p>
      <hr />
      <p>EMAIL: eokocha0@gmail.com</p>
      <hr />
      <p>
        Twitter <FaTwitter /> : Botanicalcoder
      </p>
    </Ctcsection>
  );
};

const Ctcsection = styled.section`
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
`;

export default Contact;
