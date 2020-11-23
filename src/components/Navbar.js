import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const navToggle = () => {
    let hlist = document.getElementsByClassName("hlist");
    document.getElementById("icon").style.display = "none";
    for (let i = 0; i < hlist.length; i++) {
      hlist[i].style.display = "inline-block";
    }
  };
  return (
    <MyNav>
      <ul>
        <li>
          <h3 className="logo"> BotanicalCoder </h3>
        </li>
        <li id="icon" onClick={navToggle}>
          <FaBars />
        </li>
        <li className="hlist first">
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="hlist">
          <a href="#about">ABOUT ME</a>
        </li>
        <li className="hlist">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </MyNav>
  );
};

const MyNav = styled.nav`
  background-color: #a70000;
  color: white;
  font-size: large;
  margin-top: -2em;
  margin-left: -2em;
  margin-right: -3em;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;

  .first {
    margin-left: 19em;
  }
  ul {
    list-style-type: none;
    position: relative;
  }
  ul li {
    display: inline-block;
    padding: 0em 0.45em;
    font-weight: bolder;
  }
  li a {
    color: white;
    text-decoration: none;
  }

  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a:active {
    color: grey;
  }
  a:hover {
    color: black;
  }
  .logo {
    padding-right: 5em;
  }
  #icon {
    font-weight: bolder;
    font-size: xx-large;
    float: right;
    margin-top: 0.5em;
  }
  @media screen and (max-width: 450px) {
    .hlist {
      display: none;
    }
    .logo {
      padding-right: 0em;
    }
  }
  @media screen and (min-width: 450px) {

    .hlist {
      display: inline-block;
    }
    .first {
      margin-left: 5em;
    }
    #icon {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    .first {
      margin-left: 19em;
    }
  }
`;

export default Navbar;
