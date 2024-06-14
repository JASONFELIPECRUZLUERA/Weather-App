import React, { useState, useEffect } from 'react'
import { useWeather } from '../WeatherContext';

const NavBar = () => {

  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { searchByCity } = useWeather();
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  function closeModal() {
    searchByCity(inputValue);
    setOpenModal(false);
  }


  return (
    <div>
      <div onClick={() => setOpenModal(true)} className='flex justify-center items-center ml-[46px] mt-[42px] bg-[#6E707A] w-[161px] h-[40px] text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway cursor-pointer hover:bg-gray-600 active:bg-gray-700'>Seach for places</div>

      {openModal &&
        <>
          <div className='flex flex-col sm:w-[400px] sm:h-[1023px] w-[375px] h-[672px] sm:bg-[#1E213A] bg-[#1E213A]  absolute top-0 left-0 gap-4'>

            <div className='flex justify-end'>
              <button onClick={() => setOpenModal(false)} className=' text-white bg-[#6E707A] w-6 cursor-pointer '>X</button>
            </div>

            <div className='flex flex-row justify-center gap-3'>

              <div className='w-[268px] h-[48px] border border-[#E7E7EB] flex flex-row gap-3'>

                <img src='icon-search.svg' className='w-[24px] h-[24px] mt-3 ml-3'></img>

                <input
                  type="text"
                  placeholder='search location'
                  value={inputValue}
                  onChange={handleChange}
                  className='bg-transparent text-[#616475] focus:outline-none'
                >
                </input>

              </div>

              <button onClick={() => closeModal({ inputValue })} className=' w-[86px] h-[48px] bg-sky-600 text-white'>Search</button>

            </div>

          </div>



        </>
      }
    </div>
  )
}

export default NavBar
