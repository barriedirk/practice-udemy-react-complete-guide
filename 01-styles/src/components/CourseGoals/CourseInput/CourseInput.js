import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

// usin css module
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

// using styled.compoents
/* 
const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid ? "red" : "black")}
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        background: ${(props) => (props.invalid ? "#ffd7d7" : "#transparent")}
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }

    &.invalid input {
        border-color: red;
        background: #ffd7d7;
    }

    &.invalid label {
        color: red;
    }
`;
// 
<FormControl invalid={!isValid}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
</FormControl>
*/

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    };

    // example styles
    //
    // <label style={{ color: !isValid ? "red" : "black" }}>
    //    Course Goal
    // </label>
    //
    // <input
    //    style={{
    //        borderColor: !isValid ? "red" : "#ccc",
    //        background: !isValid ? "salmon" : "transparent",
    //    }}
    //    type="text"
    //    onChange={goalInputChangeHandler}
    // />

    // We are using styled-component to replace the wrapper div
    //
    // <div className={`form-control ${!isValid ? "invalid" : ""}`}>
    //    <label>Course Goal</label>
    //    <input type="text" onChange={goalInputChangeHandler} />
    // </div>

    // one way using styled.component
    //
    // <FormControl className={!isValid && "invalid"}>

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
