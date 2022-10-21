import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './WeathersPage.less';

function WeathersPage() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    
    const navigate = useNavigate();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3d0172e89eb2b47ab53ec02181654ead`

    
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
            })
        }
    }

    const onClick = () => {
        axios.get(url).then((response) => {
            const cityName = response.data.name;
            navigate(`/${cityName}`);
        })
    }

    return (
        <div className="WeathersPage">
            <div className="search">
                <input type="text" value={location} placeholder="Enter a city" onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} />
            </div>
        <div className="container">
            <div className="top">
                <div className="location">
                    <p className='location-country' onClick={onClick}>{data.sys ? data.sys.country : null } {data.name}</p>
                </div>
            </div>
        </div>
    </div>
  );

}

export default WeathersPage;