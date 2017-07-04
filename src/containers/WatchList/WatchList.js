import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { addToWatchList, removeFromWatchList } from "../../actions/add&removeWatchList";
import "./WatchList.css";

const WatchListElem = ( { info } ) => {
    console.log( "watchlist data is", info );
    return (
        <div>
            <h2>{info.titleOriginal}</h2>
        </div>
    );
};

class WatchList extends React.Component {
    render () {
        const filtered = this.props.movies.filter( ( movie ) => ( movie.inWatchList ) );

        const watchList = filtered.map( ( item ) => (
            <WatchListElem info={ item } />
         ) );

        return (
            <div>
                <div className="watchlist-content" >
                    <h1 >This is your watchlist: </h1>
                    { watchList }
                    <Link to={ "/movies" }>All Movies</Link>
                </div>
            </div> );
    }
}

function matchDispatchToProps( dispatch ) {
    return bindActionCreators( {
        addToWatchList,
        removeFromWatchList,
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

export default connect( mapStateToProps, matchDispatchToProps )( WatchList );
