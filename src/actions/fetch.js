export const fetchMovies = ( page ) => {
    console.log( `Nr of Page: ${ page }` );

    fetch( "/getMovies", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
        body: JSON.stringify( { wantedPage: page } ),
    } )
    .then( ( response ) => response.json() )
    .then( ( movies ) =>
        // console.log( movies );
         ( {
             type: "FETCH",
             payload: movies,
         } ) );

    return {
        type: "FETCH",
        payload: { message: "no data yet" },
    };
};
