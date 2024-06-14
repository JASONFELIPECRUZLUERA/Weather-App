import React from 'react';
import AirPressure from './AirPressure';
import WindStatus from './WindStatus';
import Humidity from './Humidity';
import Visibility from './Visibility';


const HightlightsWeather = ({ weatherData }) => {
  return (
    <div className='flex flex-col sm:justify-center sm:items-center items-center sm:mt-12 mt-0'>
      <span className='text-[24px] font-[700px] leading-[28.18px] text-[#E7E7EB] font-raleway'>Today's Hightlights</span>

      <div className='flex sm:flex-col flex-col mt-6 gap-2'>
        <div className='flex sm:flex-row flex-col w-full gap-2'>
          <WindStatus weatherData={weatherData}></WindStatus>
          <Humidity weatherData={weatherData}></Humidity>
          
        </div>

        <div className='flex sm:flex-row flex-col w-full gap-2'>
          <Visibility weatherData={weatherData}></Visibility>
          <AirPressure weatherData={weatherData}></AirPressure>
        </div>
      </div>
    </div>
  );
}

export default HightlightsWeather;

