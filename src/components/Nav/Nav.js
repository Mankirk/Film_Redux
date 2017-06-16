import React from "react";
import "./Nav.css";
import SmallTag from "./SmallTag";

const Nav = ( { watchList } ) => {
    const show = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.remove( "hidden" );
    };

    const unShow = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.add( "hidden" );
    };

    return (
        <nav className="navBar">
            <h2>A Movie Thing</h2>
            <button className="show" onClick={ show } >
               WatchList <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <div className="watchList hidden" id="watchList" onMouseLeave={ unShow } />
        </nav>
    );
};

 function mapStateToProps( state ) {
    console.log( state.movies.filter( ( movie ) => movie.inWatchList );
    return { watchList: state.movies.filter( ( movie ) => movie.inWatchList ) };
}

export default Nav;
