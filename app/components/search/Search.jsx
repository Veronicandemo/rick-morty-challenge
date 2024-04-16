'use client'
import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = ({ setSearch, setPageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative text-gray-600">
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search Something. . ."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          autoComplete="off"
        />
        <button
          onClick={searchBtn}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#01AFCA] p-[.5rem] rounded-lg text-[14px] text-white"
              >
        <IoSearch fontSize='1.5em' />
        
          {' '}
        </button>
      </div>
    </>
  );
};

export default Search;
