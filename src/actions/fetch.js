const FETCH_MOVIES = "FETCH_MOVIES";
const FETCH_MOVIES_COMPLETED = "FETCH_MOVIES_COMPLETED";
const FETCH_MOVIES_FAILED = "FETCH_MOVIES_FAILED";
const INCREMENT_PAGE = "INCREMENT_PAGE";

export const incrementPage = ( page ) => ( {
    type: INCREMENT_PAGE,
    payload: page,
} );

export const requestMovies = ( page ) => ( {
    type: FETCH_MOVIES,
    page,
} );

export const recieveMovies = ( movies ) => ( {
    type: FETCH_MOVIES_COMPLETED,
    movies,
} );

export const failedMovies = ( error ) => ( {
    type: FETCH_MOVIES_FAILED,
    error,
} );

export function fetchMovies ( page ) {
    return function( dispatch ) {
        dispatch( requestMovies( page ) );
        return fetch( `getMovies/${ page }` )
        .then( response => response.json() )
        .then( movies => {
            dispatch( recieveMovies( movies ) );
            dispatch( incrementPage( page ) );
        } );
    };
}

/* export const fetchMovies = ( page ) => {
    console.log( `Nr of Page: ${ page }` );

    fetch( "/getMovies", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
        body: JSON.stringify( { wantedPage: page } ),
    } )
    .then( ( response ) => response.json() )
    .then( ( movies ) => {
        console.log( "started the fetch" );
        return movies;
    },
         );
};

export const toggleFlag = () => ( {
    type: "FETCH_REQUEST",
    payload: true,
} );

export const fetchSuccess = ( ) => {
    const request = fetch( "/getMovies", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
        body: JSON.stringify( { wantedPage: 1 } ),
    } ).then( ( response ) => response.json() );
    return {
        type: "FETCH_SUCCESS",
        payload: request,
    };
};*/
