export default function ( state = {}, action ) {
    switch ( action.type ) {
        case "CHANGE_LIGHT_BOX":
            return action.payload;
            break;
    }
    return state;
}
