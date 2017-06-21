export default function ( state = 1, action ) {
    if ( action.type === "INCREMENT_PAGE" ) {
        console.log( "incrementing" );
        console.log( "action payload :", action.payload );
        return action.payload + 1;
    }
    return state;
}
