import React, { Children } from 'react'
import { createContext, useContext, useState, useEffect } from 'react';

const App = createContext()
const AppContext = ({children}) => {
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
      });

    return (
        <App.Provider value={{alert, setAlert}} >
            { children }
        </App.Provider>
    )
}

export default AppContext
export const AppState = () => {
    return useContext(App);
}