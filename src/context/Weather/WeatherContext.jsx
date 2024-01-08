import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext()
export const WeatherProvider = ({ children }) => {


    const initialState = {
        WeatherData: [],
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState)
    
    return (
        <WeatherContext.Provider value={{ ...state, WeatherDispatch: dispatch }}>
            {children}
        </WeatherContext.Provider>
    )



}

export default WeatherContext;