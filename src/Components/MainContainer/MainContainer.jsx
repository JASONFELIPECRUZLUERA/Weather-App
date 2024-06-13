import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import HightlightsWeather from './Day\'sHightlightsWeather/HightlightsWeather';
import { useWeather } from '../WeatherContext';
import LocationGPS from '../SideBar/LocationGPS';


const MainContainer = () => {
  
  const { weatherData } = useWeather();

  return (
    <div className='w-[981px] h-[1023px] bg-[#100E1D] md:w-10/12 md:flex-col'>
      <div className='ml-[100px] mr-[100px] h-full'>
        <div className='flex flex-row justify-end items-center'>
          <div className='flex justify-center items-center mt-[42px] ml-[126px] w-[40px] h-[40px] bg-[#E7E7EB] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
            <span className='text-[#110E3C]'>C°</span>
          </div>
          <div className='flex justify-center items-center mt-[42px] w-[40px] h-[40px] ml-3 bg-[#6E707A] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
            <span className='text-[#E7E7EB]'>F°</span>
          </div>
        </div>
        <WeatherCard dailyForecast={weatherData.dailyForecasts} />
        <LocationGPS mostrarBoton={true}/>
        <HightlightsWeather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default MainContainer;

