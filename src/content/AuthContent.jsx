import React from "react";

export const AuthContent = React.createContext();

export const AuthContextProvider = ({children}) => {
    const isAuth =true;
    return <AuthContent.Provider value = {isAuth}>{children}</AuthContent.Provider>
}