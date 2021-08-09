import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid) {
            return;
        }

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClassess = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClassess = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClassess}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClassess}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && (
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
