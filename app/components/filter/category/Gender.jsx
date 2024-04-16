/* eslint-disable no-unused-vars */
import { genders } from '@/app/constants/constants'
import React from 'react'
import Filterbtn from '../Filterbtn'

const Gender = ({ setGender, setPageNumber }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col gap-[.5rem]">
      <div className="text-[20px]  text-[#BC631F] font-semibold py-4">Gender</div>
      <div className="flex flex-col gap-[1.5rem]">
        {genders.map((items, index) => {
          return (
            <Filterbtn
              name="gender"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setGender}
              input={items}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gender