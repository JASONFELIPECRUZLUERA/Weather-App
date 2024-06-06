import React from 'react'

const Visibility = ({weatherData}) => {
  return (

    <div className='flex justify-center items-center flex-col w-[328px] h-[159px] bg-[#1E213A] gap-3'>

      <span className='text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway'>Visibility</span>

      <div className='flex justify-center items-center p-1'>
        <span className='text-[64px] font-[700px] leading-[75.14px] text-[#E7E7EB] font-raleway'>{weatherData.visibility}</span>
        <span className='text-[36px] font-[500px] leading-[42.26px] text-[#E7E7EB] font-raleway'>miles</span>
      </div>

    </div>
  )
}

export default Visibility
