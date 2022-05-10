import React, { useContext } from "react";
import GlobalContext from "../../context/globalContext";
import logoImg from "../../assets/Star_Wars_Logo.svg.png";
import styles from "./LandingPage.module.scss";
import { IoChevronDown } from "react-icons/io5";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const dropContext = useContext(GlobalContext);

  const handleDropDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dropContext?.setShowMovies(true);
  };

  return (
    <div className={styles.container}>
      <figure className={styles.container__figure}>
        <img src={logoImg} alt="starwaz logo" />
      </figure>
      <div className={styles.container__button}>
        <button onClick={(event) => handleDropDown(event)}>
          Show Movie List
        </button>
        <i>
          <IoChevronDown />
        </i>
      </div>
    </div>
  );
};

export default LandingPage;
