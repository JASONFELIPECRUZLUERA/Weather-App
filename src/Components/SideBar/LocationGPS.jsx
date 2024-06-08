import React, { useState, useEffect } from 'react';
import { useWeather } from '../WeatherContext';


const LocationGPS = ({ mostrarBoton }) => {

  const { updateWeatherData } = useWeather();
  const [geolocation, setGeolocation] = useState(null);

  function success(position) {
    setGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  }

  function error() {
    alert("Sorry, no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  async function getData({ latitude, longitude }) {
    const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3bc4c9f45cf04e7a74ac17d51146bf82`);
    const jsonRs = await rs.json();

    const rs2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=3bc4c9f45cf04e7a74ac17d51146bf82`);
    const jsonRs2 = await rs2.json();


    if (jsonRs2.list && jsonRs2.list.length > 0 || jsonRs.name) {
      const dailyForecasts = jsonRs2.list.filter((forecast, index) => index % 8 === 0);

      updateWeatherData({
        city: jsonRs.name,
        temp: (jsonRs.main.temp - 273.15).toFixed(0),
        description: jsonRs.weather[0].description,
        icon: jsonRs.weather[0].icon,
        humidity: jsonRs.main.humidity,
        visibility: jsonRs.visibility,
        pressure: jsonRs.main.pressure,
        speed: jsonRs.wind.speed,
        deg: jsonRs.wind.deg,
        dt: jsonRs.dt,
        dailyForecasts: dailyForecasts.map(forecast => ({
          tempMax: (forecast.main.temp_max - 273.15).toFixed(0),
          tempMin: (forecast.main.temp_min - 273.15).toFixed(0),
          dt: forecast.dt,
          icon: forecast.weather[0].icon
        }))
      });
    }
  }
  

  useEffect(() => {
    if (geolocation) {
      getData(geolocation);
    }
  }, [geolocation]);

  return (
    <div className='flex flex-col items-center'>
      {!mostrarBoton && (
        <div className='flex justify-center items-center mt-[42px] ml-[126px] w-[40px] h-[40px] bg-[#6E707A] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
          <img onClick={() => navigator.geolocation.watchPosition(success, error, options)} src="icon-gps.svg" alt="gps" />
        </div>
      )}
    </div>
  );
}

export default LocationGPS;

