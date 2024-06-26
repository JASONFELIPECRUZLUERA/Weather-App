import React from 'react'
import { useWeather } from '../WeatherContext';

const InfoWeather = () => {
  
  const { weatherData } = useWeather();

  const iconSrc = `${weatherData.current.icon}.png`;

  return (

    <div className='flex flex-col justify-center items-center'>

      <div className='flex flex-col sm:h-[376px] justify-center items-center'>
        <img src={iconSrc} alt='icon-weather loading...' className='sm:w-[202px] sm:h-[234px] w-[150px] h-[174px] text-white'></img>
      </div>

      <div className='flex flex-row justify-center items-center h-[169px] w-[192px]'>
        <span className='text-[144px] font-[500px] leading-[169.06px] text-[#E7E7EB] font-raleway'>{weatherData.current.temp ? weatherData.current.temp : '...'}</span>
        <span className='text-[48px] font-[500px] leading-[56.35px] text-[#A09FB1] font-raleway'>°C</span>
      </div>

      <div className='mt-[70px]'>
        <span className='text-[36px] font-[600px] leading-[42.26px] text-[#A09FB1] font-raleway'>{weatherData.current.description ? weatherData.current.description : 'Loading...'}</span>
      </div>


    </div>



  )
}

export default InfoWeather
