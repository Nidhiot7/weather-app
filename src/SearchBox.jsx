import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https:api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1713af2402b9560cf23df9d0dcc61b3d";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo("");
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='searchBox'>

            <form onSubmit={handleSubmit} >
                <div className='search'>
                    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                    <br /><br />
                    <Button type="submit" variant="contained">Search</Button>
                </div>
                {error && <p style={{ backgroundColor: "red"}}>No such place exits!</p>}
            </form>
        </div>
    )
}