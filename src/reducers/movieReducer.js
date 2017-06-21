export default function( state = [], action ) {
    if ( action.type === "FETCH_MOVIES_COMPLETED" ) {
        const addWatchlistProp = action.movies.map( ( movie ) =>
             Object.assign( movie, { inWatchList: false } ) );

        return state.concat( addWatchlistProp );
    }

    if ( action.type === "ADD_TO_WATCHLIST" ) {
        return state.map( movie => {
            if ( movie.id === action.payload.id ) {
                return Object.assign( { }, movie, { inWatchList: true } );
            }

            return movie;
        } );
    }
    if ( action.type === "REMOVE_FROM_WATCHLIST" ) {
        return state.map( movie => {
            if ( movie.id === action.payload.id ) {
                return Object.assign( { }, movie, { inWatchList: false } );
            }

            return movie;
        } );
    }
    return state;
}
