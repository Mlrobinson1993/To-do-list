import React, { Component } from "react";

export class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  getDay = day => {
    switch (day) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        return null;
    }
    return day;
  };

  getMonth = month => {
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        return null;
    }
    return month;
  };

  updateTime = () => {
    this.setState({
      date: new Date()
    });
    // console.log(this.state.date.toLocaleTimeString());
  };

  componentDidMount() {
    setInterval(() => this.updateTime(), 1000);
  }

  render() {
    return (
      <div className="heading">
        <h1 className="heading__time">
          {" "}
          {this.state.date.getHours() +
            ":" +
            (this.state.date.getMinutes() < 10 ? "0" : "") +
            this.state.date.getMinutes()}
        </h1>
        <h1 className="heading__day">
          {this.getDay(this.state.date.getDay())}
        </h1>

        <h3 className=" heading__date">
          {this.state.date.getDate() +
            " " +
            this.getMonth(this.state.date.getMonth()) +
            ", " +
            this.state.date.getFullYear()}
        </h3>
      </div>
    );
  }
}

export default Heading;
