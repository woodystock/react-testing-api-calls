import axios from "axios";
import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import Header from "../components/Header";
import {useFilms} from "../FilmsContext"


const GibliBrowser = () => {

    const [films, setFilms] = useFilms();
    const [filmIndex, setFilmIndex] = useState(0);

    const getFilms = async () => {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films/')
        setFilms(response.data);
    }

    useEffect(() => {
        getFilms();
    }, [])

    return (
        <main>
            <Header />
            <FilmCard filmData={films[filmIndex]} />
        </main>
    )
}


export default GibliBrowser