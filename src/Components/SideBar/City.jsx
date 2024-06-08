import React from 'react'
import { useWeather } from '../WeatherContext';
 
const City = () => {
  const { weatherData } = useWeather();

  return (
    <div className='mb-7 flex flex-grow justify-center items-center mt-[42px]'>
      <img src='icon-location.svg' alt='location'></img>

      <span className='mt-4 text-[18px] font-[600px] leading-[21.13px] text-[#A09FB1] font-raleway'>{weatherData.current.name}</span>


    </div>
  )
}

export default City
