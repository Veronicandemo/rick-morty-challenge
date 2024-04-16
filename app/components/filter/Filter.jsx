import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';

const Filter = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies
}) => {
  let clear = () => {
    setStatus('');
    setGender('');
    setSpecies('');
    setPageNumber(1);
    window.location.reload();
  };
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex justify-between items-center sm:flex-col md:flex-row">
        <div className="text-[28px]">Filters</div>
        <div onClick={clear} className="cursor-pointer border-2 border-red-500 hover:bg-red-200 p-2 rounded-lg">
          Clear Filters
        </div>
      </div>
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      <Gender setPageNumber={setPageNumber} setGender={setGender} />
    </div>
  );
};

export default Filter;
