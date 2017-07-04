import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../../actions/add&removeWatchList";
import { toggleLightBox, changeLightBoxData } from "../../actions/index";
import Movie from "../../components/Movie/Movie";
import "./MovieDetail.css";

const SelectMenu = ( { list } ) =>
    // console.log( this.props );
     ( <div className="selectMenu">
         <div>
             { list.map( ( listItem ) => (
                 <div>
                     <p>{listItem.titleOriginal}</p>
                     <Link to={ `/movies/${ listItem.id }` }>Movie {`${ listItem.id }`}</Link>
                 </div>
         ) ) }
         </div>
     </div> );

const SelectContent = ( { mov } ) => {
    if ( !mov ) {
        return ( <h2>No currently selected movie</h2> );
    }
    return (
        <div>
            <p>Title {`${ mov.titleOriginal }`}</p>
            <p>Country {`${ mov.country }`}</p>
            <p>Year {`${ mov.year }`}</p>
            <button className="back-link" ><Link to={ "/movies" } activeClassName="link-style">Back to All Movies</Link></button>
        </div>
    );
};

class MovieDetail extends React.Component {
    render () {
        console.log( this.props.selectedMovie );
        console.log( "ownProps", this.props.ownProps );
        return (
            <div >
                <Nav />
                <div className="movie-detail" >
                    <h1>Hello this is the detail page</h1>
                    <div className="detail-contents" >
                        <SelectMenu list={ this.props.movies } />
                        <SelectContent mov={ this.props.selectedMovie } />
                    </div>
                </div>
            </div> );
    }
}

function matchDispatchToProps( dispatch ) {
    return bindActionCreators( {
        changeLightBoxData,
        toggleLightBox,
        addToWatchList,
        removeFromWatchList,
    }, dispatch );
}

function mapStateToProps( state, ownProps ) {
    return {
        movies: state.movies,
        selectedMovie: state.movies.find( ( movie ) => movie.id == ownProps.match.params.id ),
        ownProps,
        lightBoxData: state.lightBoxData,
        showingLightBox: state.showingLightBox,
        nrOfPages: state.nrOfPages,
    };
}

export default connect( mapStateToProps, matchDispatchToProps )( MovieDetail );

/* <ul>
    <li ><Link to={ `${ match.url }/movie/1` }>Movie 1</Link> </li>
    <li ><Link to={ `${ match.url }/movie/2` }>Movie 2</Link> </li>
    <li ><Link to={ `${ match.url }/movie/3` }>Movie 3</Link> </li>
    <li ><Link to={ `${ match.url }/movie/4` }>Movie 4</Link> </li>
</ul>

<Route exact path={ `${ match.url }/movie/:id` } component={ Child } />*/
