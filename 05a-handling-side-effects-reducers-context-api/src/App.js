import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if you wrote the following sentences directly, will reated a infinite loop
    // error: Uncaught Error: Too many re-renders. React limits the
    //        number of renders to prevent an infinite loop.
    // to avoid this error, use react hook useEffect as a wrapper
    //
    // const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    // if (storedUserLoggedInInformation === "1") {
    //     setIsLoggedIn(true);
    // }

    // useEffect only run once when the app starts
    //    note: no dependencies
    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1"); // 1 login, 0 no login
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", "0");
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
