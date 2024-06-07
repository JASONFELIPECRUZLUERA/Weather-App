import React, { useState } from 'react'
import NavBar from './NavBar'
import InfoWeather from './InfoWeather'
import City from './City'
import LocationGPS from './LocationGPS'
import DateComponent from './Date'



const SideBar = () => {
    const [locationName, setLocationName] = useState('');
    const [weatherData, setWeatherData] = useState({ temp: '', description: '', dt: '', icon: '', dailyForecasts: [] });
    
    return (
        <div className='flex flex-col w-[459px] h-[1023px] bg-[#1E213A]'>

            <div className='flex flex-row'>
                <NavBar></NavBar>
                <LocationGPS setLocationName={setLocationName} setWeatherData={setWeatherData}></LocationGPS>
            </div>

            <InfoWeather weatherData={weatherData}></InfoWeather>
            <DateComponent weatherData={weatherData}></DateComponent>
            <City data={locationName}></City>
            
        </div>
    )
}

export default SideBar
