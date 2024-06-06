import React from 'react'

const AirPressure = ({weatherData}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[328px] h-[159px] bg-[#1E213A] gap-3'>

      <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>Air Pressure</span>

      <div className='flex justify-center items-center p-1'>
        <span className='text-[64px] font-[700px] leading-[75.14px] text-[#E7E7EB] font-raleway'>{weatherData.pressure}</span>
        <span className='text-[36px] font-[500px] leading-[42.26px] text-[#E7E7EB] font-raleway'>mb</span>
      </div>

    </div>
  )
}

export default AirPressure
