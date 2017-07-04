import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { addToWatchList, removeFromWatchList } from "../../actions/add&removeWatchList";
import { toggleLightBox, changeLightBoxData } from "../../actions/index";
import { fetchMovies } from "../../actions/fetch";
import "./Nav.css";
import SmallTag from "./SmallTag";

class Nav extends React.Component {
    show() {
        const watchList = document.getElementById( "watchList" );
        watchList.classList.remove( "hidden" );
    }

    unShow() {
        const watchList = document.getElementById( "watchList" );
        watchList.classList.add( "hidden" );
    }

    render() {
        const filtered = this.props.movies.filter( ( item ) => item.inWatchList,

        );

        const watchList = filtered.map( ( item ) => (
              // movie
            <SmallTag
                watchListElement={ item }
                removeFromWatchList={ this.props.removeFromWatchList }
                watchListLength={ filtered.length }
            /> ) );
        return (
            <nav className="navBar">
                <h2>A Movie Thing</h2>
                <button className="show" onClick={ this.show.bind( this ) } >WatchList <i className="fa fa-bars" aria-hidden="true" /> </button>
                <div className="watchList hidden" id="watchList" onMouseLeave={ this.unShow.bind( this ) }>
                    { filtered.length === 0 ? <SmallTag watchListElement={ "WatchList is empty, you pleb!" } /> : watchList }
                </div>
                <ul className="router-nav">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/movies">All Movies</Link> </li>

                    <li> <Link to="/watchList"> Watchlist </Link> </li>
                </ul>
            </nav>
        );
    }
}

// export default Nav;

function matchDispatchToProps( dispatch ) {
    return bindActionCreators( {
        changeLightBoxData,
        toggleLightBox,
        addToWatchList,
        removeFromWatchList,
        fetchMovies,
    }, dispatch );
}

function mapStateToProps( state ) {
    return {
        movies: state.movies,
        lightBoxData: state.lightBoxData,
        showingLightBox: state.showingLightBox,
        nrOfPages: state.nrOfPages,
    };
}

export default connect( mapStateToProps, matchDispatchToProps )( Nav );
