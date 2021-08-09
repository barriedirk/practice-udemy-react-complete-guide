// import React, { useRef, useEffect } from "react";
import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// const Input = (props) => {

// parameter ref, is to use invoke some method inside of the component
// in join with React.forwardRef
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    // don't use it because, in this app, when the form is rendered, the focus will set to password
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    const activate = () => {
        inputRef.current.focus();
    };

    // to use outside the component
    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <div
            className={`${classes.control} ${
                !props.isValid ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
