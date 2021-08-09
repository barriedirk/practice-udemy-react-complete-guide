// import React, { useState, useEffect } from "react";
import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    // The code move to auth-context.js in a custom component and will
    // use on index.js
    //
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //
    // useEffect(() => {
    //     const storedUserLoggedInInformation =
    //         localStorage.getItem("isLoggedIn");
    //
    //     if (storedUserLoggedInInformation === "1") {
    //         setIsLoggedIn(true);
    //     }
    // }, []);
    //
    // const loginHandler = (email, password) => {
    //     // We should of course check email and password
    //     // But it's just a dummy/ demo anyways
    //     localStorage.setItem("isLoggedIn", "1");
    //     setIsLoggedIn(true);
    // };
    //
    // const logoutHandler = () => {
    //     localStorage.removeItem("isLoggedIn");
    //     setIsLoggedIn(false);
    // };
    //
    // return (
    //     <React.Fragment>
    //         <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //         <main>
    //             {!isLoggedIn && <Login onLogin={loginHandler} />}
    //             {isLoggedIn && <Home onLogout={logoutHandler} />}
    //         </main>
    //     </React.Fragment>
    // );

    //<AuthContext.Provider value={{ isLoggedIn: false }}></AuthContext.Provider>
    // not necessary: isAuthenticated={isLoggedIn}
    // return (
    //     <AuthContext.Provider
    //       value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
    //         <MainHeader onLogout={logoutHandler} />
    //         <main>
    //             {!isLoggedIn && <Login onLogin={loginHandler} />}
    //             {isLoggedIn && <Home onLogout={logoutHandler} />}
    //         </main>
    //     </AuthContext.Provider>
    // );

    const ctx = useContext(AuthContext);

    return (
        <React.Fragment>
            <MainHeader onLogout={ctx.onLogout} />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
