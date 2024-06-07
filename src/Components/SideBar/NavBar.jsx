import React, { useState, useEffect } from 'react'

const key = '3bc4c9f45cf04e7a74ac17d51146bf82'

const NavBar = () => {

  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  async function getData(url, callback) {
    const rs = await fetch(url);
    const jsonRs = await rs.json();
    callback(jsonRs);
  }

  useEffect(() => {
    console.log('current');
    console.log(current);
    console.log('forecast');
    console.log(forecast);
  }, [forecast, current])

  function searchByCity() {
    getData(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`, setCurrent);
    getData(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${key}`, setForecast);
  }

  function closeModal() {
    searchByCity();
    setOpenModal(false);
  }


  return (
    <div>
      <div onClick={() => setOpenModal(true)} className='flex justify-center items-center ml-[46px] mt-[42px] bg-[#6E707A] w-[161px] h-[40px] text-[16px] font-[500px] leading-[18.78px] text-[#E7E7EB] font-raleway cursor-pointer hover:bg-gray-600 active:bg-gray-700'>Seach for places</div>

      {openModal &&
        <>
          <div className='w-[400px] h-[1023px] bg-slate-800 absolute top-0 left-0'>

            <span onClick={() => setOpenModal(false)} className='text-white cursor-pointer'>X</span>

            <div className='flex flex-row'>

              <div>
                <img src=''></img>

                <input 
                  type="text"
                  value={inputValue}
                  onChange={handleChange} 
                  >
                </input>

              </div>

              <button onClick={() => closeModal({inputValue})} className='bg-sky-600'>Search</button>

            </div>

          </div>



        </>
      }
    </div>
  )
}

export default NavBar
