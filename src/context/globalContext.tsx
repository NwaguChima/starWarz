import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  showMovies: boolean;
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [showMovies, setShowMovies] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ dropDown, setDropDown, showMovies, setShowMovies }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
