import { species } from '@/app/constants/constants' // Importing the 'species' array from the constants file
import React from 'react'
import Filterbtn from '../Filterbtn'
/**
 * This component displays a list of species as filter buttons.
 * It allows the user to select a species and sets the state accordingly.
 */

const Species = ({ setSpecies, setPageNumber }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col gap-[.5rem]">
      <div className="text-[20px]  text-[#BC631F] font-semibold py-4">Species</div>
      <div className="grid grid-cols-3 lg:grid-cols-2 gap-[1.5rem]">
        {species.map((item, index) => {
          return (
            <Filterbtn
              name="species"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setSpecies}
              input={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Species