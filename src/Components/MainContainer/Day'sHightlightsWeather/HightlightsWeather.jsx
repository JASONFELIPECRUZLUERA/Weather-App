import React from 'react';
import AirPressure from './AirPressure';
import WindStatus from './WindStatus';
import Humidity from './Humidity';
import Visibility from './Visibility';
import LocationGPS from '../../SideBar/LocationGPS';

const HightlightsWeather = ({ setLocationName, setWeatherData, weatherData }) => {
  return (
    <div>
      <span className='text-[24px] font-[700px] leading-[28.18px] text-[#E7E7EB] font-raleway'>Today's Hightlights</span>

      <div className='flex flex-row'>
        <div className='flex flex-col w-full gap-2'>
          <WindStatus weatherData={weatherData}></WindStatus>
          <Visibility weatherData={weatherData}></Visibility>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <Humidity weatherData={weatherData}></Humidity>
          <AirPressure weatherData={weatherData}></AirPressure>
        </div>
      </div>
    </div>
  );
}

export default HightlightsWeather;

