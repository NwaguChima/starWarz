import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { getCharacters } from "../../utils/data";
import { ICharacter } from "../../utils/types";
import styles from "./MovieDetail.module.scss";

interface MovieDetailProps {}

const MovieDetail: React.FC<MovieDetailProps> = () => {
  const [characters, setCharacters] = useState<ICharacter[] | undefined>();
  const [error, setError] = useState("");
  const { movie } = useContext(GlobalContext)!;

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data: ICharacter[] = await getCharacters(movie!.characters);
        console.log(characters, "asmovee");
        setCharacters(data);
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchCharacters();
    // eslint-disable-next-line
  }, [movie]);

  console.log("character: ", characters, "err: ", error);

  return <div className={styles.details}>Hello</div>;
};

export default MovieDetail;
