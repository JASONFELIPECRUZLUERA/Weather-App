import React, { useState } from 'react'
import NavBar from './NavBar'
import InfoWeather from './InfoWeather'
import City from './City'
import LocationGPS from './LocationGPS'
import DateComponent from './Date'
import { useWeather } from '../WeatherContext';

const SideBar = () => {

    const { weatherData } = useWeather();

    return (
        <div className='flex flex-col w-[459px] h-[1023px] bg-[#1E213A]'>

            <div className='flex flex-row'>
                <NavBar></NavBar>
                <LocationGPS></LocationGPS>
            </div>

            <InfoWeather weatherData={weatherData}></InfoWeather>
            <DateComponent weatherData={weatherData}></DateComponent>
            <City weatherData={weatherData}></City>

        </div>
    )
}

export default SideBar
