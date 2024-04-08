import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { getData } from "../state/movie/movieSlice";

const PaginationButton: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = useSelector(
    (state: RootState) => state.movie.totalResults
  );
  const totalPages = Math.ceil(Number(totalResults) / 10);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getData({ pageNumber: currentPage }));
  }, [dispatch, currentPage]);
  return (
    <>
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
        <div>
          <p className="text-sm leading-5 text-blue-700">
            Showing page
            <span className="font-medium"> {currentPage} </span>
            of
            <span className="font-medium"> {totalPages} </span>
            pages
          </p>
        </div>
        <div>
          <nav className=" z-0 inline-flex shadow-sm">
            <div>
              <button
                onClick={() =>
                  currentPage > 1 ? setCurrentPage(currentPage - 1) : null
                }
                className=" inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {Array.from(Array(totalPages).keys()).map((pageNumber) => {
                if (
                  pageNumber === 0 ||
                  pageNumber === totalPages - 1 ||
                  (pageNumber >= currentPage - 2 &&
                    pageNumber <= currentPage + 2)
                ) {
                  return (
                    <button
                      onClick={() => setCurrentPage(pageNumber + 1)}
                      key={pageNumber}
                      className={`-ml-px inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-900 focus:z-10 focus:outline-none ${
                        pageNumber === currentPage - 1
                          ? " text-white bg-blue-600 focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary  transition ease-in-out duration-150 hover:bg-blue-500 "
                          : "bg-gray-100 focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-blue-900 hover:text-white"
                      }`}
                    >
                      {pageNumber + 1}
                    </button>
                  );
                } else if (
                  pageNumber === 1 ||
                  pageNumber === totalPages - 2 ||
                  pageNumber === currentPage - 3 ||
                  pageNumber === currentPage + 3
                ) {
                  return <span key={pageNumber}>...</span>;
                }
                return null;
              })}
            </div>
            <div>
              <button
                onClick={() =>
                  currentPage < totalPages
                    ? setCurrentPage(currentPage + 1)
                    : null
                }
                className="-ml-px  inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default PaginationButton;
