import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/data";
import { IMovies } from "../../utils/types";
import styles from "./MovieList.module.scss";

interface MovieListProps {}

// let
const MovieList: React.FC<MovieListProps> = () => {
  const [movies, setMovies] = useState<IMovies[] | []>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function movieList() {
      try {
        const movieData = await getMovies();
        // console.log(movieData);
        setLoading(false);
        setMovies(movieData);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    }
    movieList();
  }, []);

  console.log("xxx", error);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      <div className={styles.movies}>
        {movies?.map((movie) => (
          <div className={styles.movies__card} key={movie.url}>
            <h3 className={styles.movies__card__title}>
              <span>TITLE: </span>
              {movie.title}
            </h3>
            <p className={styles.movies__card__crawl}>
              <span>DIRECTOR: </span>
              {movie.director}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
