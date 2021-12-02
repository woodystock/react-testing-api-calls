import axios from "axios";
import { useState } from "react";


const GibliBrowser = () => {

    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films')
        setFilms(response.data.data);
    }

    return (
        <main>

        </main>
    )
}


export default GibliBrowser