
import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const mnavOpen = () => {
    let hlist = document.getElementsByClassName("mnav");
    for (let i = 0; i < hlist.length; i++) {
      hlist[i].style.display = "block";
    }
  };
  const mnavClose = () => {
    let hlist = document.getElementsByClassName("mnav");
    for (let i = 0; i < hlist.length; i++) {
      hlist[i].style.display = "none";
    }
  };
  return (
    <MyNav>
      <ul>
        <li>
          <h3 className="logo">
            BotanicalCoder
            <span id="icon" onClick={() => mnavOpen()}>
              <FaBars />
            </span>
          </h3>
        </li>
        <div className="dnav">
          <li className="navlist first">
            <a href="#portfolio">PORTFOLIO</a>{" "}
          </li>
          <li className="navlist">
            <a href="https://botanicalcodersblog.hashnode.dev/">BLOG</a>
          </li>
          <li className="navlist">
            <a href="#about">ABOUT ME</a>
          </li>
          <li className="navlist">
            <a href="#contact">CONTACT</a>
          </li>
        </div>
      </ul>
      <ul className="mnav" id="mnav">
        <div>
          <li className="navlist ">
            <a href="#portfolio">PORTFOLIO </a>
            <span id="close" onClick={mnavClose}>
              X
            </span>
          </li>
          <li className="navlist">
            <a href="#blog">BLOG</a>
          </li>
          <li className="navlist">
            <a href="#about">ABOUT ME</a>
          </li>
          <li className="navlist">
            <a href="#contact">CONTACT</a>
          </li>
        </div>
      </ul>
    </MyNav>
  );
};

const MyNav = styled.nav`
  color: white;
  font-size: large;
  margin-top: 0em;
  margin-left: 0em;
  margin-right: 0em;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;

  top: 0;
  z-index: 1;
  overflow-x: hidden;
  ul {
    list-style-type: none;
    position: relative;
    margin: 0em;
    padding: 1em;
    background-color: #a70000;
  }
  ul li {
    display: inline-block;
    padding: 0em 0.45em;
    font-weight: bolder;
  }
  li a {
    text-decoration: none;
  }

  li a:link,
  li a:visited {
    color: white;
  }
  li a:hover,
  li a:active {
    color: black;
  }
  .logo {
    text-align: left;
    padding: 0em;
    margin: 0.2em 0em -0.3em 0em;
    clear: left;
  }
  #icon {
    font-weight: bolder;
    font-size: xx-large;
    float: right;
    margin-top: 0em;
  }

  @media screen and (max-width: 550px) {
    .dnav {
      display: none;
    }

    .mnav {
      display: none;
      clear: both;
      opacity: 0.9;
      margin-top: -2em;
    }

    ul li {
      display: block;
      text-align: center;
    }
    #close {
      float: right;
      color: black;
      opacity: 1;
      font-size: larger;
      margin-top: -0.6em;
    }
  }
  @media screen and (min-width: 550px) {
    .mnav {
      display: none;
    }
    .dnav {
      display: inline-block;
    }

    #icon {
      display: none;
    }

    .first {
      margin-left: 10em;
    }
  }
  @media screen and (min-width: 1023px) {
    .mnav {
      display: none;
    }
    .first {
      margin-left: 24.5em;
    }
  }
`;

export default Navbar;

   
