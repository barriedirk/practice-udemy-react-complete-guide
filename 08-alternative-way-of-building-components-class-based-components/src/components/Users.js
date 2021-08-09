import { Component } from "react";

// import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//     { id: "u1", name: "Max" },
//     { id: "u2", name: "Manuel" },
//     { id: "u3", name: "Julie" },
// ];

class Users extends Component {
    constructor() {
        super();
        // the state in react class always is a object
        // and the name always has to be named "state"
        // is not up to you

        // this.state = {
        //     showUsers: true,
        //     moreState: "Test",
        //     data: [],
        //     nested: {
        //         a: 1,
        //         b: 2,
        //     },
        // };

        this.state = {
            showUsers: true,
            more: "Test",
        };
    }

    componentDidUpdate() {
        if (this.props.users.length === 0) {
            // this sentence will going to crash the app
            throw new Error("No users provided!");
        }
    }

    toggleUsersHandler() {
        // this.state.showUsers = false; // NOT !

        // internally merged
        // this.setState({ showUsers: false });

        // console.log('[ toggleUsersHandler ] ::: ');
        this.setState((curState) => {
            console.log("[ curState ] ::: ", curState);
            return { showUsers: !curState.showUsers };
        });
    }

    render() {
        // const usersList = (
        //     <ul>
        //         {DUMMY_USERS.map((user) => (
        //             <User key={user.id} name={user.name} />
        //         ))}
        //     </ul>
        // );
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? "Hide" : "Show"} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true);

//     const toggleUsersHandler = () => {
//         // always overwrite
//         setShowUsers((curState) => !curState);
//     };

//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     );

//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? "Hide" : "Show"} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// };

export default Users;
