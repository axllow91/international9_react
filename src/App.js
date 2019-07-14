import React from "react";
import "./resources/styles.css";
import "./components/header_footer/Header";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueNFO";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      
      <Element name="venue">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
