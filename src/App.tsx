import React from "react";
import styles from "./App.module.scss";
import LandingPage from "./components/landingPage/LandingPage";
import MovieList from "./components/movieList/MovieList";

function App() {
  return (
    <div className={styles.App}>
      <LandingPage />
      <MovieList />
    </div>
  );
}

export default App;
