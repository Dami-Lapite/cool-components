import React, { Component } from "react";
import "../Styles/dateWeather.css";

export default class DateWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: "",
      month: "",
      dayOfMonth: "",
      year: "",
      time: "",
      temperature: "",
      iconUrl: "",
    };
  }

  convertTemp = (kelvin) => {
    let celcius = kelvin - 273.15;
    return Math.round(celcius);
  };

  getTime = (hours, minutes) => {
    var h = hours % 12 || 12;
    var m = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    var ampm = hours < 12 || hours === 24 ? "AM" : "PM";
    let timeString = h.toString() + ":" + m + ampm;
    return timeString;
  };

  async getWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Calgary,ca&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          temperature: this.convertTemp(data.main.temp),
          iconUrl: data.weather[0].icon,
        })
      );
  }

  componentDidMount() {
    this.getWeather();
    let currentDate = new Date();
    let tempTime = this.getTime(
      currentDate.getHours(),
      currentDate.getMinutes()
    );
    var daysOfWeek = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    var months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    this.setState({
      dayOfWeek: daysOfWeek[currentDate.getDay()],
      month: months[currentDate.getMonth()],
      dayOfMonth: currentDate.getDate().toString(),
      year: currentDate.getFullYear().toString(),
      time: tempTime,
    });
  }
  render() {
    return (
      <div className="center-container">
        <div className="dw-container">
          <div className="weather-container">
            <div className="weather">
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  this.state.iconUrl +
                  ".png"
                }
                alt="weather-icon"
              />
              <p className="roboto-condensed">{this.state.time}</p>
            </div>
            <p className=" details roboto-condensed">
              <span className="temperature ">
                {this.state.temperature}&deg;C
              </span>
              <br />
              <span className="location ">Calgary, AB</span>
            </p>
          </div>
          <div className="date-container">
            <p>
              <span className="roboto-condensed dayOfWeek">
                {this.state.dayOfWeek}
              </span>
              <br />
              <span className="roboto-condensed month">{this.state.month}</span>
              <br />
              <span className="roboto-condensed year">
                {this.state.dayOfMonth}, {this.state.year}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
