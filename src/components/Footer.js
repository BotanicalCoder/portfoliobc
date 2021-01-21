
import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Myfooter>
      <p>@ made by botanicalCoder</p>
    </Myfooter>
  );
};
const Myfooter = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: rgb(56, 1, 1);
  color: white;
  margin-top: 9em;
  margin-left: 0em;
  margin-right: 0em;
  text-align: center;
  position: relative;
  bottom: 0;
  padding: 2em;
`;
export default Footer;

