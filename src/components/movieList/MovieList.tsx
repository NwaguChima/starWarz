import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { getMovies } from "../../utils/data";
import { IMovies } from "../../utils/types";
import Spinner from "../spinner/Spinner";
import styles from "./MovieList.module.scss";
import { VscError } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = () => {
  const [movies, setMovies] = useState<IMovies[] | []>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { setMovie, setShowModal, setShowMovies } = useContext(GlobalContext)!;

  useEffect(() => {
    async function movieList() {
      const movieData = await getMovies();

      if (movieData.message) {
        setLoading(false);
        setError(movieData.message);
      }

      setLoading(false);
      setMovies(movieData);
    }
    movieList();
  }, []);

  const handleModal = (currentMovie: IMovies) => {
    setShowModal(true);
    setMovie(currentMovie);
  };

  const handleBack = () => {
    setShowMovies(false);
  };

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <i>
          <VscError />
        </i>
      </div>
    );
  }

  return (
    <>
      {loading && <Spinner />}
      <div className={styles.movies}>
        {movies.length > 0 &&
          movies?.map((movie) => (
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
              <p className={styles.movies__card__marquee}>
                <span className={styles.scroll}>{movie.opening_crawl}</span>
              </p>
            </div>
          ))}
        <div className={styles.movies__back} onClick={handleBack}>
          <button>Back Home</button>
          <i>
            <BiArrowBack />
          </i>
        </div>
      </div>
    </>
  );
};

export default MovieList;
