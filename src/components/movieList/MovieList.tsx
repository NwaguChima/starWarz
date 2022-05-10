import React, { useEffect } from "react";
import { getMovies } from "../../utils/data";

interface MovieListProps {}

// let
const MovieList: React.FC<MovieListProps> = () => {
  useEffect(() => {
    async function movieList() {
      const movies = await getMovies();
      console.log("res", movies);
    }
    movieList();
  }, []);
  return <div>Hello Movie</div>;
};

export default MovieList;
