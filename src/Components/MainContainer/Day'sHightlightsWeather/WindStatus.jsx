import React from 'react'
import { useWeather } from '../../WeatherContext';

const WindStatus = () => {

    const { weatherData } = useWeather();
    return (
        <div className='flex justify-center items-center flex-col w-[328px] h-[204px] bg-[#1E213A] gap-3'>

            <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>Wind status</span>

            <div className='flex justify-center items-center p-1'>
                <span className='text-[64px] font-[700px] leading-[75.14px] text-[#E7E7EB] font-raleway'>{weatherData.current.speed}</span>
                <span className='text-[36px] font-[500px] leading-[42.26px] text-[#E7E7EB] font-raleway'>mph</span>
            </div>

            <div className='flex justify-center items-center p-1'>
                <img className={`w-[29.49px] h-[29.49px] rotate-[${weatherData.current.deg}deg]`} src='icon-direction.png'></img>
                <span className='text-[14px] font-[500px] leading-[16.44px] text-[#E7E7EB] font-raleway'>WSW</span>
            </div>
        </div>
    )
}

export default WindStatus
