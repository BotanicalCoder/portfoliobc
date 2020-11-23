import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <PortfolioContainer />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
