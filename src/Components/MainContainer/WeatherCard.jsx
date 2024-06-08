import React from 'react';
import { useWeather } from '../WeatherContext';

const WeatherCard = () => {

  const { weatherData } = useWeather();

  const unixToUTC = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className='flex flex-row gap-3.5'>
      {weatherData.forecast.map((forecast,index) => (
        <div key={index} className='flex justify-center items-center flex-col w-[120px] h-[177px] bg-[#1E213A] gap-5'>
          <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>{forecast.dt ? unixToUTC(forecast.dt) : 'Loading...'}</span>
          <img className='w-[56.44px] h-[62px]' src={`${forecast.icon}.png`} alt="weather icon" />
          <div className='flex justify-center items-center p-1'>
            <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>{forecast.tempMax}°C</span>
            <span className='text-[16px] font-[500px] leading-[18.78px] text-[#A09FB1] font-raleway'>{forecast.tempMin}°C</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;

