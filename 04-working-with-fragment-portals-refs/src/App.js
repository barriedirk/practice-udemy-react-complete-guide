import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    // return (
    //   <div>
    //     <AddUser onAddUser={addUserHandler} />
    //     <UsersList users={usersList} />
    //   </div>
    // );

    // note: you can use <>...</> instead of <div>...</div>
    // depends of the app configuration
    //
    // return (
    //   <>
    //     <AddUser onAddUser={addUserHandler} />
    //     <UsersList users={usersList} />
    //   </>
    // );

    // using React.Fragment
    // return (
    //     <React.Fragment>
    //         <AddUser onAddUser={addUserHandler} />
    //         <UsersList users={usersList} />
    //     </React.Fragment>
    // );

    // need: import { Fragment } from 'react'
    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </Fragment>
    );
}

export default App;
