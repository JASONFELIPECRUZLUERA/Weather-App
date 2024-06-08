import React from 'react';

const ButtonGPS = () => {

    return (
        <div onClick={() => navigator.geolocation.watchPosition(success, error, options)} className='flex justify-center items-center mt-[42px] ml-[126px] w-[40px] h-[40px] bg-[#6E707A] rounded-full cursor-pointer hover:bg-gray-600 active:bg-gray-700'>
            <img src="icon-gps.svg" alt="gps" />
        </div>
    )
}

export default ButtonGPS
