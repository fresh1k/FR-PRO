import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import './WeathersPage.less';

const WeatherDetailPage = () => {
    const params = useParams();
    const [data, setData] = useState({});


    const getData = async (cityName) => {
        if (cityName) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3d0172e89eb2b47ab53ec02181654ead`)
            if (response.data) {
                setData({
                    ...response.data,
                })
            }
            console.log(response.data)
        }
    }
    
    useEffect(() => {
        const paramCityName = params.cityName
        getData(paramCityName)
    }, [params])

    if (!data) {
        return null
    }

    const { weather, main, wind } = data;

    return (
    <div className="WeathersPage">
        <div className="container">
            <div className="top">
                <div className="temp">
                    {main ? <h1>{Math.floor(main.temp)}&#8451;</h1> : null}
                </div>
                <div className="description">
                    {weather ? <p>{weather[0].main}</p> : null}
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                        {main ? <p>{Math.floor(main.feels_like)}&#8451;</p> : null}
                    <p>Feels like</p>
                </div>
                <div className="humidity">
                {main ? <p>{main.humidity}%</p> : null}
                        <p>Humidity</p>
                </div>
                <div className="wind">
                {wind ? <p>{wind.speed}MPH</p> : null}
                        <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
  );

}

export default WeatherDetailPage;