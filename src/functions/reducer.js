// Generic Input reducer
export const reducer =  (state, action) => {
    // Begin switch statement
    switch (action.type) {
        // Add the new value to the state
        case 'add': {
            return {
                ...state,
                [action.name]: action.value
            };
        }
        // delete a property
        case 'delete': {
            delete state[action.name];
            return state
        }
        // set the state to default
        case 'setToDefault': {
            state = {[action.name]: action.value};
            return state
        }
        // reset the state
        case 'reset': {
            state = {};
            return state;
        }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}