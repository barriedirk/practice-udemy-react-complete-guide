// import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import UsersContext from './store/users-context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];


// function App() {
//     return (
//         <div>
//             <Users />
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <UserFinder />
//         </div>
//     );
// }

function App() {
    const usersContext = {
      users: DUMMY_USERS
    }
  
    return (
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    );
  }

export default App;
