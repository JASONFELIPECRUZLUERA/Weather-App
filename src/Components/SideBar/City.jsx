import React from 'react'
 
const City = ({weatherData}) => {


  return (
    <div className='mb-7 flex flex-grow justify-center items-center mt-[42px]'>
      <img src='icon-location.svg' alt='location'></img>

      <span className='mt-4 text-[18px] font-[600px] leading-[21.13px] text-[#A09FB1] font-raleway'>{weatherData.city}</span>


    </div>
  )
}

export default City
