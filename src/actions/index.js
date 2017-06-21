export const changeLightBoxData = ( newMovie ) => ( {
    type: "CHANGE_LIGHT_BOX",
    payload: newMovie,
} );

export const toggleLightBox = ( showing ) => {
    if ( showing ) {
        return {
            type: "TOGGLE_LIGHT_BOX",
            payload: "hidden",
        };
    }
    return {
        type: "TOGGLE_LIGHT_BOX",
        payload: "notHidden",
    };
};
