import React, { Component } from "react";
import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 200], // prices array
    category: ["Balcony", "Near Stage", "VIP Back Stage"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare attende, quaeso. Quod ea non occurrentia fingunt, vincunt Aristonem",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare attende, quaeso. Quod ea non occurrentia fingunt, vincunt Aristonem",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare attende, quaeso. Quod ea non occurrentia fingunt, vincunt Aristonem"
    ],
    linkTo: [
      "http://www.dota2.com/store/",
      "http://www.dota2.com/store/",
      "http://www.dota2.com/store/"
    ],
    delay: [500, 0, 500]
  };

  // return some jsx
  showBoxes = () =>
    this.state.prices.map((box, iter) => (
      <Zoom delay={this.state.delay[iter]} key={iter}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[iter]}</span>
              <span>{this.state.category[iter]}</span>
            </div>

            <div className="pricing_description">
              {this.state.description[iter]}
            </div>

            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#f8a800"
                color="#ffffff"
                link={this.state.linkTo[iter]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
