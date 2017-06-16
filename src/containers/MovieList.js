import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/fetch";
import "./MovieList.css";

import Nav from "../components/Nav/Nav";
import Movie from "../components/Movie/Movie";
import LightBox from "../components/lightBox/LightBox";

class MovieList extends Component {

    componentDidMount() {
        this.props.fetchMovies( 1 );
    }

    createMovieItems() {
        return this.props.movies.map( ( movie, index ) => (
            <Movie
                movieData={ movie }
                index={ index }
            /> ) );
    }

    render() {
        const { movies } = this.props;
        console.log( "these are the movies", movies );
        return (
            <div className="movieList">
                <Nav watchlist={ movies.filter( .... ) } />
                <LightBox />
                { this.createMovieItems() }
            </div> );
    }
}

function mapStateToProps( state ) {
    console.log( state );
    return { movies: state.movies };
}

function matchDispatchToProps( dispatch ) {
    return {
        fetchMovies: ( ...args ) => dispatch( fetchMovies( ...args ) )
    }
}

export default connect( mapStateToProps, matchDispatchToProps )( MovieList );
