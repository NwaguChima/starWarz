import React, { createContext, useState } from "react";
import { IMovies } from "../utils/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  showMovies: boolean;
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  movie: IMovies | {};
  setMovie: React.Dispatch<React.SetStateAction<IMovies | {}>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showMovies, setShowMovies] = useState<boolean>(false);
  const [movie, setMovie] = useState<IMovies | {}>({});

  return (
    <GlobalContext.Provider
      value={{
        dropDown,
        setDropDown,
        showMovies,
        setShowMovies,
        showModal,
        setShowModal,
        movie,
        setMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
