import React from "react";
import { useSelector } from "react-redux";
import { Movie } from "../state/movie/movieSlice";
import { RootState } from "../state/store";

export const MovieList = () => {
  const movies = useSelector((state: RootState) => state.movie.Search);

  return (
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Movie Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Release Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              IMDb ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {movies.map((movie: Movie, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm leading-5 text-gray-800">
                      {movie.Title}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-blue-900">
                  {movie.Year}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {movie.imdbID}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
