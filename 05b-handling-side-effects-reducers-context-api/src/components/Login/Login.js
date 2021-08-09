// import React, { useState, useEffect, useReducer } from "react";
import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

// note it's create outside of the function
// note, emailRducer is not a react component, we can't use react hooks like useState, etc
const emailReducer = (state, action) => {
    console.log("[ emailReducer A state, action ] ::: ", state, action);
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }

    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }

    console.log("[ emailReducer B action.type ] ::: ", action.type);
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }

    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }

    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    // useEffect(() => {
    //   const identifier = setTimeout(() => {
    //     console.log('Checking form validity!');
    //     setFormIsValid(
    //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
    //     );
    //   }, 500);

    //   return () => {
    //     console.log('CLEANUP');
    //     clearTimeout(identifier);
    //   };
    // }, [enteredEmail, enteredPassword]);

    // using alias assignment to avoid that the useEffect evalute all the object, only the isValid
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);

        // setFormIsValid(
        //     event.target.value.includes("@") &&
        //         enteredPassword.trim().length > 6
        // );

        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        // setFormIsValid(
        //     event.target.value.includes("@") && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });

        // setEnteredPassword(event.target.value);

        // setFormIsValid(
        //     emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(enteredEmail.includes("@"));

        // setEmailIsValid(emailState.isValid);

        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);

        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // props.onLogin(enteredEmail, enteredPassword);

        // props.onLogin(emailState.isValid, passwordState.isValid);

        // we remove the disabled={!formIsValid} attribute to see more
        // about refs with a custom component and focus

        if (formIsValid) {
            authCtx.onLogin(emailState.isValid, passwordState.isValid);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    // className={`${classes.control} ${ emailIsValid === false ? classes.invalid : "" }`}
    // value={enteredEmail}

    // className={`${classes.control} ${ passwordIsValid === false ? classes.invalid : "" }`}
    // value={enteredPassword}

    // return (
    //     <Card className={classes.login}>
    //         <form onSubmit={submitHandler}>
    //             <div
    //                 className={`${classes.control} ${
    //                     !emailState.isValid ? classes.invalid : ""
    //                 }`}
    //             >
    //                 <label htmlFor="email">E-Mail</label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     value={emailState.value}
    //                     onChange={emailChangeHandler}
    //                     onBlur={validateEmailHandler}
    //                 />
    //             </div>
    //             <div
    //                 className={`${classes.control} ${
    //                     !passwordState.isValid ? classes.invalid : ""
    //                 }`}
    //             >
    //                 <label htmlFor="password">Password</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     value={passwordState.value}
    //                     onChange={passwordChangeHandler}
    //                     onBlur={validatePasswordHandler}
    //                 />
    //             </div>
    //             <div className={classes.actions}>
    //                 <Button
    //                     type="submit"
    //                     className={classes.btn}
    //                     disabled={!formIsValid}
    //                 >
    //                     Login
    //                 </Button>
    //             </div>
    //         </form>
    //     </Card>
    // );

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailState.isValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordState.isValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
