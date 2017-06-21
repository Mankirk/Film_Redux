import React from "react";
import "./Movie.css";

const Movie = ( { movieData, index, changeLightBoxData, toggleLightBox, addToWatchList, removeFromWatchList } ) => {
    const getLightBox = () => {
        changeLightBoxData( movieData );
        toggleLightBox();
    };

    const handleAdd = () => {
        addToWatchList( movieData );
    };

    const handleRemove = () => {
        removeFromWatchList( movieData );
    };
    const linkMod = movieData.ytUrl.split( "/" );
    const extracted = linkMod[ 4 ];
    return ( <div className="movie">
        <img src={ `http://img.youtube.com/vi/${ extracted }/hqdefault.jpg` } alt="thumbnail" />
        <div className="details">
            <div className="label">
                <p className="name" >Title:</p>
                <p className="value" >{ movieData.titleOriginal }</p>
            </div>
            <div className="label">
                <p className="name" >Country:</p>
                <p className="value" >{ movieData.country }</p>
            </div>
            <div className="label">
                <p className="name" >Year:</p>
                <p className="value" >{ movieData.year }</p>
            </div>
        </div>
        <div className="buttons">
            <button
                className="add-Rm"
                onClick={
               movieData.inWatchList ?
               handleRemove : handleAdd }
            >
                { movieData.inWatchList ? "Remove From WatchList" : "Add To Watchlist" }
            </button>
            <button className="getDetails" onClick={ getLightBox }>See Details</button>
        </div>
    </div> );
};

export default Movie;
