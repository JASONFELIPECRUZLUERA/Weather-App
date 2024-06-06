import React from 'react'

const InfoWeather = ({ weatherData }) => {
  
  const iconSrc = `${weatherData.icon}.png`;

  return (

    <div className='flex flex-col justify-center items-center'>

      <div className='flex flex-col h-[376px] justify-center items-center mt-[70px]'>
        <img src={iconSrc} className='w-[202px] h-[234px]'></img>
      </div>

      <div className='flex flex-row justify-center items-center h-[169px]'>
        <span className='text-[144px] font-[500px] leading-[169.06px] text-[#E7E7EB] font-raleway'>{weatherData.temp !== '' ? `${weatherData.temp}` : '15'}</span>
        <span className='text-[48px] font-[500px] leading-[56.35px] text-[#A09FB1] font-raleway'>°C</span>
      </div>

      <div className='mt-[70px]'>
        <span className='text-[36px] font-[600px] leading-[42.26px] text-[#A09FB1] font-raleway'>{weatherData.description !== '' ? weatherData.description : 'Shower'}</span>
      </div>


    </div>



  )
}

export default InfoWeather
