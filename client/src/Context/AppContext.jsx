import React, { Children } from 'react'
import { createContext, useContext, useState, useEffect } from 'react';

const App = createContext()
const AppContext = ({ children }) => {
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });

    const [auth, setAuth] = useState(true)

    return (
        <App.Provider value={{ alert, setAlert, auth, setAuth }} >
            {children}
        </App.Provider>
    )
}

export default AppContext
export const AppState = () => {
    return useContext(App);
}