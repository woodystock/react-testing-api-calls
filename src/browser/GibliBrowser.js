import axios from "axios";
import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import FilmCardViewer from "../components/FilmCardViewer";
import Header from "../components/Header";
import {useFilms} from "../FilmsContext"


const GibliBrowser = () => {

    const [films, setFilms] = useFilms();
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
            <div className="card-container">
                {error ? <ErrorMessage error={error} />: <FilmCardViewer />}
            </div>
        </main>
    )
}


export default GibliBrowser