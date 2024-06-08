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
    const apiKey = '3bc4c9f45cf04e7a74ac17d51146bf82';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    const currentResponse = await fetch(currentWeatherUrl);
    const currentData = await currentResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    
    console.log(currentData);
    console.log(forecastData);

    if (forecastData.list && forecastData.list.length > 0 || currentData.name) {
      const dailyForecasts = forecastData.list.filter((forecast, index) => index % 8 === 0);

      updateWeatherData({
        current:{
          temp: (currentData.main.temp).toFixed(0),
          description: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          name: currentData.name,
          humidity: currentData.main.humidity,
          visibility: currentData.visibility,
          pressure: currentData.main.pressure,
          speed: currentData.wind.speed,
          deg: currentData.wind.deg,
          dt: currentData.dt,
        },
        forecast: dailyForecasts.map(forecast => ({
          tempMax: forecast.main.temp_max.toFixed(0),
          tempMin: forecast.main.temp_min.toFixed(0),
          dt: forecast.dt,
          icon: forecast.weather[0].icon,
        })),
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

