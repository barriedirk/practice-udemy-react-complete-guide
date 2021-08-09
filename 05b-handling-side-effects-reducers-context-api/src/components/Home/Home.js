// import React from "react";
import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";

// const Home = (props) => {
const Home = () => {
    // return (
    //     <Card className={classes.home}>
    //         <h1>Welcome back!</h1>
    //         <Button onClick={props.onLogout}>Logout</Button>
    //     </Card>
    // );

    const authCtx = useContext(AuthContext);

    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
