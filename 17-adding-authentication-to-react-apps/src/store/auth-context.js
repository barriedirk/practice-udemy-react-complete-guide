import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token, expirationTime) => {},
    logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    // 60000 = 60s
    //  3600 = 3.6s
    if (remainingTime <= 60000) {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    };
};

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    // don't need to use useEffect because the
    // localStorage is a synchronous API
    // const intialToken = localStorage.getItem("token");
    let intialToken;
    if (tokenData) {
        intialToken = tokenData.token;
    }

    const [token, setToken] = useState(intialToken);

    const userIsLoggedIn = !!token;

    // const logoutHandler = () => {
    //     setToken(null);
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("expirationTime");

    //     if (logoutTimer) {
    //         clearTimeout(logoutTimer);
    //     }
    // };

    // we use useCallback to avoid infinity loops with useEffect when this function is recreated
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationTime", expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        // setTimeout(logoutHandler, 3000);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (tokenData) {
            console.log(
                "useEffect / tokenData.duration ::: ",
                tokenData.duration
            );
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
