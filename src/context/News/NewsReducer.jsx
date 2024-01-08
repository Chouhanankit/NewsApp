const NewsReducer = (state, action) => {

    switch (action.type) {

        case "GET_NEWS":
            return {
                ...state,
                allnews: action.payload.news,
                topic: action.payload.topic,
            }
        default:
            return state;
    }

}

export default NewsReducer;