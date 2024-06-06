import React from 'react'

const ProgressBar = ({percentage}) => {
  return (
    <div className="flex flex-col items-center bg-[#1E213A] rounded-md">

      <div className="w-full flex justify-between text-[12px] font-[700px] leading-[14.09px] text-[#A09FB1] font-raleway">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>

      <div className="w-[229px] h-2 bg-gray-300 rounded-[80px]">
        <div
          className="h-2 bg-yellow-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="w-full flex justify-end text-[12px] font-[700px] leading-[14.09px] text-[#A09FB1] font-raleway">
        <span>%</span>
      </div>

    </div>
  )
}

export default ProgressBar
