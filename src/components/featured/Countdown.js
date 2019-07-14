import React from "react";
import Slide from "react-reveal/Slide";

class Countdown extends React.Component {
  state = {
    deadline: "Aug, 20, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getCountdown(deadline) {
    const diffInSeconds = Math.abs(Date.parse(deadline) - Date.parse(new Date())) / 1000;

    if (diffInSeconds < 0) {
      console.log("Date passed!");
    } else {
      const seconds = Math.floor(diffInSeconds % 60);
      const minutes = Math.floor(diffInSeconds / 60 % 60);
      const hours = Math.floor(diffInSeconds / 60 / 60 % 24);
      const days = Math.floor(diffInSeconds / 60 / 60/ 24);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getCountdown(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="coundown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">DAYS</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hr</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
