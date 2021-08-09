import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
    // const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    // initalize with true is not correct
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    // commented because we use another approach
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;



    // useEffect(() => {
    //     if (enteredNameIsValid) {
    //         setFormIsValid(true)
    //     } else {
    //         setFormIsValid(false)
    //     }
    // }, [enteredNameIsValid]);

    // note: is not a real validation for email, use another validation like regexp
    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && !enteredEmailIsInvalid) {
        formIsValid = true;
    }

    // each time the enteredNameTouched or enteredName is updated, the component will rendered again and
    // the following constant would be updated

    // useEffect(() => {
    //     if (enteredNameIsValid) {
    //         console.log("[ Name Input is valid ] ::: ");
    //     }
    // }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        // commented because we use : const enteredNameIsValid = enteredName.trim() !== '';
        // if (event.target.value.trim() !== "") {
        //     setEnteredNameIsValid(true);
        // }
    };

    const emailInputChangedHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        // commented because we use : const enteredNameIsValid = enteredName.trim() !== '';
        // if (enteredName.trim() === "") {
        //     setEnteredNameIsValid(false);
        // }
    };

    const emailInputHandler = (event) => {
        setEnteredEmailTouched(true);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // commented because we use : const enteredNameIsValid = enteredName.trim() !== '';
        //
        // // very simple validation
        // if (enteredName.trim() === "") {
        //     setEnteredNameIsValid(false);
        //     return;
        // }
        //
        // setEnteredNameIsValid(true);
        //

        if (!enteredNameIsValid) {
            return;
        }

        // const enteredValue = nameInputRef.current.value;
        // console.log("[ enteredName ] ::: ", enteredName);
        // console.log("[ enteredValue ] ::: ", enteredValue);

        // try to avoid to use this way,
        // no ideal, don't manipulate the DOM
        // nameInputRef.current.value = "";
        setEnteredName("");
        setEnteredNameTouched(false);
        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClassess = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    const emailInputClassess = enteredEmailIsInvalid
        ? "form-control invalid"
        : "form-control";


    console.log('[ enteredEmailIsInvalid ] ::: ', enteredEmailIsInvalid);
    // return (
    //     <form onSubmit={formSubmissionHandler}>
    //         <div className={nameInputClassess}>
    //             <label htmlFor="name">Your Name</label>
    //             <input
    //                 ref={nameInputRef}
    //                 type="text"
    //                 id="name"
    //                 value={enteredName}
    //                 onChange={nameInputChangeHandler}
    //                 onBlur={nameInputBlurHandler}
    //             />
    //             {nameInputIsInvalid && (
    //                 <p className="error-text">Name must not be empty</p>
    //             )}
    //         </div>
    //         <div className="form-actions">
    //             <button>Submit</button>
    //         </div>
    //     </form>
    // );
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClassess}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClassess}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={emailInputChangedHandler}
                    onBlur={emailInputHandler}
                />
                {enteredEmailIsInvalid && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
