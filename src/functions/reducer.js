// Input reducer
export function reducer(state, event) {
    if (event.reset) {
        state = {}
        return state
    }
    if (event.reload) {
        return {
            ...event.value
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}