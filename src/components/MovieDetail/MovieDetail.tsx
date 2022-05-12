import React, { useContext, useEffect } from "react";
import GlobalContext from "../../context/globalContext";
import { getCharacters } from "../../utils/data";
import styles from "./MovieDetail.module.scss";

interface MovieDetailProps {}

const MovieDetail: React.FC<MovieDetailProps> = () => {
  const { movie, setCharacters, setError } = useContext(GlobalContext)!;

  useEffect(() => {
    async function fetchCharacters() {
      const data = await getCharacters(movie!.characters);
      if (data.message) {
        setError(data.message);
      }
      setCharacters(data);
    }
    fetchCharacters();
    // eslint-disable-next-line
  }, [movie]);

  return <div className={styles.details}></div>;
};

export default MovieDetail;
