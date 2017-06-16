export default function ( state = {}, action ) {
    switch ( action.type ) {
        case "FETCH":
            // console.log( `payload: ${ action.payload }` );
            return action.payload;
            break;
    }
    return state;
}
