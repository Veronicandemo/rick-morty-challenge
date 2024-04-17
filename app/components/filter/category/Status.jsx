/* eslint-disable no-unused-vars */
import { status } from '@/app/constants/constants' // Importing the 'status' array from the constants file
import React from 'react'
import Filterbtn from '../Filterbtn'

const Status = ({ setStatus, setPageNumber }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col  gap-[.5rem]">
      <div className="text-[20px] text-[#BC631F] font-semibold py-4">Status</div>
      <div className="flex flex-col gap-[2rem]">
        {status.map((item, index) => (
          <Filterbtn
            key={index}
            index={index}
            name="status"
            task={setStatus}
            setPageNumber={setPageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Status