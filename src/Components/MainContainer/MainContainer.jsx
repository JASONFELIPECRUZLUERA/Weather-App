import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import HightlightsWeather from './Day\'sHightlightsWeather/HightlightsWeather';
import { useWeather } from '../WeatherContext';
import LocationGPS from '../SideBar/LocationGPS';


const MainContainer = () => {
  
  const { weatherData } = useWeather();

  return (
    <div className='sm:w-[981px] sm:h-[1023px] w-[375px] h-[1718px] bg-[#100E1D] sm:flex-col flex-row'>
      <div className='sm:ml-[100px] sm:mr-[100px]'>
        <div className='flex flex-row sm:justify-end justify-center items-center sm:mb-12 mb-6 sm:pt-0 pt-6 sm:gap-0 gap-8 '>
          <div className='flex justify-center items-center sm:mt-[42px] sm:ml-[126px] w-[40px] h-[40px] bg-[#E7E7EB] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
            <span className='text-[#110E3C]'>C°</span>
          </div>
          <div className='flex justify-center items-center sm:mt-[42px] sm:ml-3 w-[40px] h-[40px] bg-[#6E707A] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
            <span className='text-[#E7E7EB]'>F°</span>
          </div>
        </div>
        <WeatherCard dailyForecast={weatherData.dailyForecasts} />
        <LocationGPS mostrarBoton={true}/>
        <HightlightsWeather weatherData={weatherData} />

        <div className='flex justify-center items-center sm:mt-40 mt-40 text-[14px] font-[500px] leading-[17.07px] text-[#E7E7EB] font-raleway'>created by JASONFELIPECRUZLUERA - devChallenges.io</div>
      </div>
    </div>
  );
}

export default MainContainer;

