const FilmCard = ({filmData}) => {


    return ( <article className="film-card">
                <img className="card__image" src={filmData?.image} />
                <div className="card-tag-container">
                    <p className="card__title">{filmData?.title}</p>
                    <p className="card__title japanese"> -- {filmData?.original_title}</p>
                </div>
                
            </article>
    )
}

export default FilmCard