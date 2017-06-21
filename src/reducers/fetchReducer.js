export default function ( state = [], action ) {
    if ( action.type === "FETCH_MOVIES_COMPLETED" ) {
        const addWatchlistProp = action.movies.map( ( movie ) =>
         Object.assign( movie, { inWatchList: false } ) );

        return state.concat( addWatchlistProp );
    }
    return state;
}
