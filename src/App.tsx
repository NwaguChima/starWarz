import React, { useContext } from "react";
import styles from "./App.module.scss";
import LandingPage from "./components/landingPage/LandingPage";
import Modal from "./components/modal/Modal";
import MovieList from "./components/movieList/MovieList";
import GlobalContext from "./context/globalContext";

function App() {
  const context = useContext(GlobalContext);

  return (
    <div className={styles.App}>
      <header>
        {context?.showMovies && <h1>WELCOME TO OUR MOVIE LIST...</h1>}
      </header>
      <main>{context?.showMovies ? <MovieList /> : <LandingPage />}</main>
      <Modal />
    </div>
  );
}

export default App;
