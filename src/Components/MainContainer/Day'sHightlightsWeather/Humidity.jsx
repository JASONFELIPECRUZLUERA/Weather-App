import React from 'react'
import ProgressBar from './PercentageBar/ProgressBar'

const Humidity = ({weatherData}) => {

  const percentage = weatherData.humidity !== '' ? weatherData.humidity : 84;
  
  return (
    <div className='flex justify-center items-center flex-col w-[328px] h-[204px] bg-[#1E213A] gap-3'>

      <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>Humidity</span>

      <div className='flex justify-center items-center p-1'>
        <span className='text-[64px] font-[700px] leading-[75.14px] text-[#E7E7EB] font-raleway'>{weatherData.humidity !== '' ? `${weatherData.humidity}` : '84'}</span>
        <span className='text-[36px] font-[500px] leading-[42.26px] text-[#E7E7EB] font-raleway'>%</span>
      </div>

      <ProgressBar percentage={percentage}></ProgressBar>
      
    </div>
  )
}

export default Humidity
