'use client';
import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUserInfo] = useState({});

    return (
        <UsersContext.Provider value={{
            user,
            getUserInfo,
            makeLogout,
            setUserCart,
            userCart,
            setUserInfo
        }}>
            { children }
        </UsersContext.Provider>
    );
};

export function useCart(){
    const context = useContext(UsersContext);
    return context;
}