import axios from "axios";
import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import FilmCard from "../components/FilmCard";
import Header from "../components/Header";
import {useFilms} from "../FilmsContext"


const GibliBrowser = () => {

    const [films, setFilms] = useFilms();
    const [filmIndex, setFilmIndex] = useState(0);
    const [error, setError] = useState();

    const getFilms = async () => {
        try {
            const response = await axios.get('https://ghibliapi.herokuapp.com/films')
            setFilms(response.data);
        } 
        catch( error ) {
            setError(error);
        }
        
    }

    useEffect(() => {
        getFilms();
    }, [])

    return (
        <main>
            <Header />
            {error ? <ErrorMessage error={error} />: <FilmCard filmData={films[filmIndex]} />}
        </main>
    )
}


export default GibliBrowser