// Input reducer
export function reducer(state, event) {
    if (event.rest) {
        state = {}
        return state
    } 
    return {
        ...state,
        [event.name]: event.value
    }
}