import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { getMovies } from "../../utils/data";
import { IMovies } from "../../utils/types";
import Spinner from "../spinner/Spinner";
import styles from "./MovieList.module.scss";

interface MovieListProps {}

// let
const MovieList: React.FC<MovieListProps> = () => {
  const [movies, setMovies] = useState<IMovies[] | []>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { setMovie, setShowModal } = useContext(GlobalContext)!;

  useEffect(() => {
    async function movieList() {
      try {
        const movieData = await getMovies();
        setLoading(false);
        setMovies(movieData);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    }
    movieList();
  }, []);

  const handleModal = (currentMovie: IMovies) => {
    setShowModal(true);
    setMovie(currentMovie);
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      {loading && <Spinner />}
      <div className={styles.movies}>
        {movies?.map((movie) => (
          <div
            className={styles.movies__card}
            key={movie.url}
            onClick={() => handleModal(movie)}
          >
            <h3 className={styles.movies__card__title}>
              <span>TITLE: </span>
              {movie.title}
            </h3>
            <p className={styles.movies__card__crawl}>
              <span>DIRECTOR: </span>
              {movie.director}
            </p>
            <p className={styles.movies__card__crawl}>
              <span>RELEASE DATE: </span>
              {movie.release_date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
