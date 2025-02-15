import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
    const history = useHistory();
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        // add validation

        // documentation: https://firebase.google.com/docs/reference/rest/auth
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCk5kHXgg8UaTCZOWnjNhXOhNzw_S1lFTg",
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            // assumption: Always succeeds!
            // only for demo

            history.replace("/");
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    minLength="7"
                    type="password"
                    id="new-password"
                    ref={newPasswordInputRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
