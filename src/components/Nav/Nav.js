import React from "react";
import "./Nav.css";
import SmallTag from "./SmallTag";

const Nav = ( { watchList, removeFromWatchList } ) => {
    const show = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.remove( "hidden" );
    };

    const unShow = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.add( "hidden" );
    };

    const buildWatchList = watchList.map( ( item ) => (
    // movie
        <SmallTag
            watchListElement={ item }
            removeFromWatchList={ removeFromWatchList }
            watchListLength={ watchList.length }
        /> ) );

    return (
        <nav className="navBar">
            <h2>A Movie Thing</h2>
            <button className="show" onClick={ show } >
               WatchList <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <div className="watchList hidden" id="watchList" onMouseLeave={ unShow } >
                { watchList.length === 0 ?
                    <SmallTag watchListElement={ "WatchList is empty, you pleb!" } /> : buildWatchList }
            </div>
        </nav>
    );
};

export default Nav;
