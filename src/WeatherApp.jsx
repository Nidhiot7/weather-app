import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({

        city: "Burhanpur",
        feelsLike: 27.42,
        humidity: 35,
        temp: 28.08,
        tempMax: 28.08,
        tempMin: 28.08,
        weather: "scattered clouds",

    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }} className="weather-app">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}