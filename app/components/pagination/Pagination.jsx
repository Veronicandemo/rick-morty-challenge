import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

/**
 * This component is a pagination component that uses the ReactPaginate library.
 * It receives the current page number, information about the data being paginated,
 * and a function to update the current page number as props.
 */
const Pagination = ({ pageNumber, info, setPageNumber }) => {
   /**
   * This function is called when the user clicks on a page number or the next/previous
   * buttons. It updates the current page number and calls the setPageNumber function
   * passed in as a prop.
   */
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };
 /**
   * This state variable stores the current width of the window. It is used to determine
   * how many page numbers to display at a time.
   */
  const [width, setWidth] = useState(window.innerWidth);
   /**
   * This function is called whenever the window is resized. It updates the width state
   * variable to the current width of the window.
   */
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex justify-center">
      <ReactPaginate
        className="flex justify-center items-center gap-[1rem]"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="bg-[#01AFCA] text-[#fff] border-2 border-gray-300 bg-[#fff] text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        nextClassName="bg-[#01AFCA] text-[#fff] border-2 border-gray-300 bg-[#fff] text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        activeClassName="bg-[#01AFCA] text-[#fff] border-2 border-gray-300 bg-[#fff] text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[#01AFCA]"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages || 1}
        onPageChange={pageChange}
        pageClassName="border-2 border-gray-300 bg-[#fff] text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[#01AFCA]"
        pageLinkClassName="text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
      />
    </div>
  );
};

export default Pagination;
