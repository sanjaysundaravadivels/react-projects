import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?api_key=1d12dc17a04a259f9d9b6674ca12df1b`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
