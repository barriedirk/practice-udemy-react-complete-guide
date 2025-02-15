import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // without [] always execute each time this class is rendering
    useEffect(() => {
        console.log("[ EFFECT RUNNING ( without [] ) ] ::: ");
    });

    useEffect(() => {
        console.log("[ EFFECT RUNNING ( with [] ) ] ::: ");
    }, []);

    useEffect(() => {
        console.log("[ EFFECT RUNNING ( with [EnteredPassword] dependency ) ] ::: ");
    }, [enteredPassword]);

    useEffect(() => {
        console.log("[ EFFECT RUNNING ( with [EnteredPassword] dependency ) ] ::: ");

        // execute before 
        return () => {
            console.log('[ EFFECT CLEANUP () => {} ] ::: ');
        }
    }, [enteredPassword]);

    // In this case, we want this reevaluate each time the value change
    //    to do this, we have to add dependencies
    //    note: no add setEnteredEmail, setEmailIsValid as dependences because
    //          this functions are not going to change
    //          State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change
    useEffect(() => {
        // console.log('[ useEffect ] ::: ');
        // setFormIsValid(
        //     enteredEmail.includes("@") && enteredPassword.trim().length > 6
        // );

        // using debounce
        const identifier = setTimeout(() => {
            console.log("[ Checking form validity! ] ::: ");
            setFormIsValid(
                enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
        }, 500);

        // this clean the function
        return () => {
            console.log("[ CLEANUP ] ::: ");
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        // to avoid repeat code, use useEffect
        // setFormIsValid(
        //     event.target.value.includes("@") &&
        //         enteredPassword.trim().length > 6
        // );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        // to avoid repeat code, use useEffect
        // setFormIsValid(
        //     event.target.value.trim().length > 6 && enteredEmail.includes("@")
        // );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
