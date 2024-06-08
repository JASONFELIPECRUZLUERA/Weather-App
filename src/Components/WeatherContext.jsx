import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    current: {},
    forecast: [],
  });

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  const searchByCity = async (city) => {
    const apiKey = '3bc4c9f45cf04e7a74ac17d51146bf82';
    try {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(currentWeatherUrl),
        fetch(forecastUrl)
      ]);

      const [currentData, forecastData] = await Promise.all([
        currentResponse.json(),
        forecastResponse.json()
      ]);

      console.log(currentData);
      console.log(forecastData);

      if (forecastData.list && forecastData.list.length > 0 || currentData.name) {
        const dailyForecasts = forecastData.list.filter((forecast, index) => index % 8 === 0);

        updateWeatherData({
          current: {
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
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeatherData, searchByCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

