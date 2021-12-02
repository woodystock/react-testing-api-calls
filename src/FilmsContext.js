import React, { useContext, useState } from "react";

const FilmsContext = React.createContext();

export const useFilms = () => {
    return useContext(FilmsContext)
}

export const FilmsProvider = ({children}) => {

    const [filmsData, setFilmsData] = useState([]);

    return (
        <FilmsContext.Provider value={[filmsData,setFilmsData]}>
            {children}
        </FilmsContext.Provider>
    )
}