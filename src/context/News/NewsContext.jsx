import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();
export const NewsProvider = ({ children }) => {

    const intialState = {
        allnews: [],
    }
    
    const [state, dispatch] = useReducer(NewsReducer, intialState);
    
    return (
        <NewsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext;