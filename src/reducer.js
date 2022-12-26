const reducer = (state, action) => {
    switch (action.type) {
        case "Search_Post":
            return {
                ...state,
                query: action.payload

            }
        case "Remove_Post":
            return {
                ...state,
                hits: state.hits.filter((currElement) =>
                    currElement.objectId !== action.payload)
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
    }
    return state;
}

export default reducer;