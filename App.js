import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import * as Location from "expo-location";
import axios from "axios";
import moment from "moment";

const API_KEY = "1cd1743d496348cabfe52848210506";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const weatherY = await axios.get(
      `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${latitude},${longitude}&dt=${moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD")}`
    );

    console.log(
      weatherY.data.forecast.forecastday[0].hour.map((obj) => obj.temp_c)
    );

    const weatherC = await axios.get(
      `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${latitude},${longitude}&dt=${moment().format(
        "YYYY-MM-DD"
      )}`
    );

    console.log(
      weatherC.data.forecast.forecastday[0].hour.map((obj) => obj.temp_c)
    );

    const weatherT = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`
    );

    console.log(
      weatherT.data.forecast.forecastday[1].hour.map((obj) => obj.temp_c)
    );

    const hourlyY = weatherY.data.forecast.forecastday[0].hour.map((obj) => {
      return { temp: obj.temp_c, icon: "https:" + obj.condition.icon };
    });

    const hourlyC = weatherC.data.forecast.forecastday[0].hour.map((obj) => {
      return { temp: obj.temp_c, icon: "https:" + obj.condition.icon };
    });

    const hourlyT = weatherT.data.forecast.forecastday[1].hour.map((obj) => {
      return { temp: obj.temp_c, icon: "https:" + obj.condition.icon };
    });

    const hourlyData = hourlyY.map((obj, index) => {
      return {
        index,
        tempY: Math.round(obj.temp),
        tempYIcon: obj.icon,
        diffYT:
          Math.round(hourlyC[index].temp - obj.temp) < 0
            ? Math.round(hourlyC[index].temp - obj.temp) + "°"
            : Math.round(hourlyC[index].temp - obj.temp) === 0
            ? "="
            : "+" + Math.round(hourlyC[index].temp - obj.temp) + "°",
        tempC: Math.round(hourlyC[index].temp),
        tempCIcon: hourlyC[index].icon,
        diffTT:
          Math.round(hourlyT[index].temp - hourlyC[index].temp) < 0
            ? Math.round(hourlyT[index].temp - hourlyC[index].temp)
            : Math.round(hourlyT[index].temp - hourlyC[index].temp) === 0
            ? "="
            : "+" + Math.round(hourlyT[index].temp - hourlyC[index].temp),
        tempT: Math.round(hourlyT[index].temp),
        tempTIcon: hourlyT[index].icon,
      };
      //[인덱스(시간), 어제온도,어제아이콘, 어제오늘온도차, 오늘온도,오늘아이콘, 오늘내일온도차, 내일온도,내일아이콘]//
    });

    console.log(hourlyData);

    this.setState({
      isLoading: false,
      hourlyData,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find your location", "Allow the permission");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, hourlyData } = this.state;
    return isLoading ? <Loading /> : <Weather hourlyData={hourlyData} />;
  }
}
