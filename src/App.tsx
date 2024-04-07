import React from "react";
import { MovieList } from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import PaginationButton from "./components/PaginationButton";

function App() {
  return (
    <div className="container mx-auto px-5 my-10">
      <SearchBar />
      <MovieList />
      <PaginationButton />
    </div>
  );
}

export default App;
