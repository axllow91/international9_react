import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends React.Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart} %</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase the tickets before 20th June</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                blanditiis autem quibusdam libero fuga error aliquid,
                perspiciatis doloribus repellendus non?
              </p>

              <MyButton 
                    text="Purchase tickets"
                    bck="#ffa800"
                    color="#ffffff"
                    link="http://blog.dota2.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
