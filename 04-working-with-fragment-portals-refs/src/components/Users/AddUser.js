// note: useState and useRef are react hook
import React, { useState, useRef } from "react";

import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // using ref
    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log("[ nameInputRef value ] ::: ", nameInputRef.current.value);
        // console.log("[ ageInputRef value ] ::: ", ageInputRef.current.value);

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        // if (
        //     enteredUsername.trim().length === 0 ||
        //     enteredAge.trim().length === 0
        // ) {
        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUsername("");
        // setEnteredAge("");

        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };

    // other way to send the jsx using as array, the problem is the "key"
    // each jsx element of a array need a key
    //
    //   return [
    // 	error && (
    // 		<ErrorModal
    // 			title={error.title}
    // 			message={error.message}
    // 			onConfirm={errorHandler}
    // 		/>
    // 	),
    // 	<Card className={classes.input}>
    // 		<form onSubmit={addUserHandler}>
    // 			<label htmlFor="username">Username</label>
    // 			<input
    // 				id="username"
    // 				type="text"
    // 				value={enteredUsername}
    // 				onChange={usernameChangeHandler}
    // 			/>
    // 			<label htmlFor="age">Age (Years)</label>
    // 			<input
    // 				id="age"
    // 				type="number"
    // 				value={enteredAge}
    // 				onChange={ageChangeHandler}
    // 			/>
    // 			<Button type="submit">Add User</Button>
    // 		</form>
    // 	</Card>,
    // ];

    // return (
    //     <Wrapper>
    //         {error && (
    //             <ErrorModal
    //                 title={error.title}
    //                 message={error.message}
    //                 onConfirm={errorHandler}
    //             />
    //         )}
    //         <Card className={classes.input}>
    //             <form onSubmit={addUserHandler}>
    //                 <label htmlFor="username">Username</label>
    //                 <input
    //                     id="username"
    //                     type="text"
    //                     value={enteredUsername}
    //                     onChange={usernameChangeHandler}
    //                 />
    //                 <label htmlFor="age">Age (Years)</label>
    //                 <input
    //                     id="age"
    //                     type="number"
    //                     value={enteredAge}
    //                     onChange={ageChangeHandler}
    //                 />
    //                 <Button type="submit">Add User</Button>
    //             </form>
    //         </Card>
    //     </Wrapper>
    // );

    // using ref
    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
