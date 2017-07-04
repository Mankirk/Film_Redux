import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../actions/add&removeWatchList";
import { toggleLightBox, changeLightBoxData } from "../actions/index";
import { fetchMovies } from "../actions/fetch";
import "./MovieList.css";

import Movie from "../components/Movie/Movie";
import LightBox from "../components/lightBox/LightBox";
import Nav from "../components/Nav/Nav";

class MovieList extends Component {
    constructor ( props ) {
        super( props );
        this.handleScroll = this.handleScroll.bind( this );
    }

    componentDidMount() {
        this.props.fetchMovies( this.props.nrOfPages );
        window.addEventListener( "scroll", this.handleScroll );
    }

    handleScroll() {
        const docHeight = document.documentElement.scrollHeight;
        if ( ( window.innerHeight + window.scrollY === docHeight ) && !( this.props.nrOfPages >= 11 ) ) {
            console.log( "reached bottom" );
            this.props.fetchMovies( this.props.nrOfPages );
        }
    }

    createMovieItems() {
        return this.props.movies.map( ( movie, index ) => (
            <Movie
                movieData={ movie }
                index={ index }
                changeLightBoxData={ this.props.changeLightBoxData }
                toggleLightBox={ this.props.toggleLightBox }
                addToWatchList={ this.props.addToWatchList }
                removeFromWatchList={ this.props.removeFromWatchList }
            /> ) );
    }

    render() {
        console.log( "pages", this.props.nrOfPages );
        const movies = this.props.movies;
        const watchList = movies.filter( ( movie ) => movie.inWatchList );
        return (
            <div className="movieList">
                <LightBox
                    lightBoxData={ this.props.lightBoxData }
                    showingLightBox={ this.props.showingLightBox }
                    toggleLightBox={ this.props.toggleLightBox }
                />
                { this.createMovieItems() }
            </div> );
    }
}

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

export default connect( mapStateToProps, matchDispatchToProps )( MovieList );
