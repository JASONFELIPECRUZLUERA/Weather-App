import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    city: '',
    temp: '',
    description: '',
    icon: '',
    humidity: '',
    visibility: '',
    pressure: '',
    speed: '',
    deg: '',
    dt: '',
    dailyForecasts: []
  });

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
