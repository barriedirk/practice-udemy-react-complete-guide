import { Fragment, useState, useEffect, Component } from "react";

import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

// const DUMMY_USERS = [
//     { id: "u1", name: "max" },
//     { id: "u1", name: "manuel" },
//     { id: "u1", name: "Max" },
//     { id: "u2", name: "Manuel" },
//     { id: "u3", name: "Julie" },
// ];

class UserFinder extends Component {
    // in react class, we only connect with only one context.
    static contextType = UsersContext;
    // using contextType for static and this.context to access to the values

    constructor() {
        super();

        // this.state = {
        //     filteredUsers: DUMMY_USERS,
        //     searchTerm: "",
        // };
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        };
    }

    componentDidMount() {
        // only run once
        // send http request ... dummy example
        // this.setState({ filteredUsers: DUMMY_USERS });

        console.log("[ this.context.users ] ::: ", this.context.users);
        this.setState({ filteredUsers: this.context.users });

        // the equivalent with functional react would be
        //    useEffect(() => {}, []) or
        //    useEffect(() => {}, [someDep])
    }

    componentDidUpdate(prevProps, prevState) {
        // this implement a loop
        //
        // this.setState({
        //     filteredUsers: DUMMY_USERS.filter((user) =>
        //         user.name.includes(this.state.searchTerm)
        //     ),
        // });

        // for that reason we use prevState with an if
        if (prevState.searchTerm !== this.state.searchTerm) {
            // this.setState({
            //     filteredUsers: DUMMY_USERS.filter((user) =>
            //         user.name.includes(this.state.searchTerm)
            //     ),
            // });
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    // render() {
    //     return (
    //         <Fragment>
    //             <UsersContext.Consumer>

    //             </UsersContext.Consumer>
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                    <ErrorBoundary>
                        <Users users={this.state.filteredUsers} />
                    </ErrorBoundary>
                </div>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//                 <Users users={filteredUsers} />
//             </div>
//         </Fragment>
//     );
// };

export default UserFinder;
