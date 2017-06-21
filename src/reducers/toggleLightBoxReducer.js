export default function ( state = "hidden", action ) {
    if ( action.type === "TOGGLE_LIGHT_BOX" ) {
        if ( action.payload === "hidden" ) {
            return "hidden";
        }
        return "notHidden";
    }
    return state;
}
