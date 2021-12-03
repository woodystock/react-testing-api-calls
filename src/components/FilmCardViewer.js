import { useState } from "react";
import { useFilms } from "../FilmsContext";
import FilmCard from "./FilmCard";

const FilmCardViewer = () => {

    const [filmIndex, setFilmIndex] = useState(0);
    const [films] = useFilms();

    const background = {
        backgroundImage:"url(" + films[filmIndex]?.movie_banner +")",
        backgorundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
    }

    const prevFilmTitle = () => {
        const prevIndex = filmIndex - 1;
        return films.length > 0 && prevIndex >= 0 ? films[prevIndex].title : "prev"; 
    }

    const nextFilmTitle = () => {
        const nextIndex = filmIndex + 1;
        return nextIndex < films.length ? films[filmIndex].title : "next"; 
    }

    const prevButtonClickHandler = () => {
        if(filmIndex !== 0)
            setFilmIndex(prevFilmIndex => prevFilmIndex - 1);
    }

    const nextButtonClickHandler = () => {
        if(filmIndex !== films.length - 1)
            setFilmIndex(prevFilmIndex => prevFilmIndex + 1);
    }

    


    return (
        <div className="card-viewer">
            <div className="background-image__container" style={background} />

            <div className="film-card-container">
                <button 
                    className={"card-nav-button " + (filmIndex === 0 ? "hide" : "show")}
                    onClick={prevButtonClickHandler}>
                        {prevFilmTitle()}
                </button>
                <FilmCard filmData={films[filmIndex]} />
                <button 
                    className={"card-nav-button " + (filmIndex === films.length - 1 ? "hide" : "show")}
                    onClick={nextButtonClickHandler}>
                        {nextFilmTitle()}
                </button>
            </div>
        </div>
    )
    
}
export default FilmCardViewer