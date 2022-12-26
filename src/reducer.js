const reducer = (state, action) => {
    switch (action.type) {
        case "Next_Page":
            let pageNum1 = state.pages;
            if (pageNum1 < 50)
                pageNum1 = pageNum1 + 1;
            if (pageNum1 == 50)
                pageNum1 = 1;
            return {
                ...state,
                pages: pageNum1
            }
        case "Prev_Page":
            let pageNum = state.pages;
            if (pageNum > 0)
                pageNum = pageNum - 1;
            return {
                ...state,
                pages: pageNum
            }
        case "Search_Post":
            return {
                ...state,
                query: action.payload

            }
        case "Remove_Post":
            return {
                ...state,
                hits: state.hits.filter((currElement) =>
                    currElement.objectID !== action.payload)
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