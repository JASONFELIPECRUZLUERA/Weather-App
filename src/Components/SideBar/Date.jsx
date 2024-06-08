import React from 'react'
import { useWeather } from '../WeatherContext';

const DateComponent = () => {

     const { weatherData } = useWeather();

     const unixToUTC = (unix) => {
          const date = new Date(unix * 1000);
          return date.toLocaleDateString('en-US', {
               weekday: 'short',
               day: 'numeric',
               month: 'short',
               year: 'numeric',
             });
        };

  return (
    
       <div className='flex justify-center items-center mt-[95px]'>
            <span className='text-[18px] font-[500px] leading-[21.13px] text-[#A09FB1] font-raleway'> 
            {weatherData.current.dt ? unixToUTC(weatherData.current.dt) : 'Loading...'}
            </span>
       </div>
  )
}

export default DateComponent
