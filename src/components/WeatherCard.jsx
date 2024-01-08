import React, { useContext, useEffect, useState } from 'react'
import { fetchWeather } from '../context/Weather/WeatherAction';
import WeatherContext from '../context/Weather/WeatherContext';

function WeatherCard() {

  const { WeatherDispatch, WeatherData } = useContext(WeatherContext);

  const [text, setText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(text)
    setText("")
  }
  const getWeather = async (text) => {
    const data = await fetchWeather(text);
    const WeatherData = {
      city: data.location.name,
      temp_c: data.current.temp_c,
      icon: data.current.condition.icon,
      feel: data.current.condition.text,
      wind: data.current.wind_kph,
      wind2: data.current.wind_degree,
      humidity: data.current.humidity
    }

    WeatherDispatch({
      type: "GET_WEATHER",
      payload: WeatherData,
    });
  };

  useEffect(() => {
    getWeather("Indore")
  }, [])

  return (
    <>
      <div className="col-md-4 col-sm-12 ">
        <div className="card bg-primary p-4 text-light m-1 mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="container p-4">
              <form onSubmit={handleSubmit} >
                <span className='d-flex'>
                  <input className='form-control rounded-1' type="text" placeholder="Enter the City Name " value={text} onChange={(e) => setText(e.target.value)} />
                  <button className='btn btn-sm btn-warning mx-1'>Search</button>
                </span>
              </form>
              <div className="mt-3">
                <h1 className='text-center display-4 w-100'>{WeatherData.city}</h1>
                <p className='text-center w-100'>{new Date().toLocaleTimeString("en-IN")}</p>
              </div>
              <div className="d-flex flex-column text-center mt-3 mb-4">
                <h6 className="display-4 mb-0 fw-bold" >{WeatherData.temp_c}°C </h6>
                <span className="small">{WeatherData.feel}</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <div><i className="fas fa-wind fa-fw"></i> <span className="ms-1"> {WeatherData.wind} km/h
                  </span></div>
                  <div><i className="fas fa-tint fa-fw"></i> <span className="ms-1"> {WeatherData.wind2} % </span>
                  </div>
                  <div><i className="fas fa-sun fa-fw"></i> <span className="ms-1">{WeatherData.humidity} Humidity </span>
                  </div>
                </div>
                <div>
                  <img src={WeatherData.icon}
                    width="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard;