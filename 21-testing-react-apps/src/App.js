import logo from "./logo.svg";
import Greeting from "./components/Greeting";
import Async from './components/Async';
import "./App.css";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn more
//                 </a>
//             </header>
//         </div>
//     );

// function App() {
//     return (
//         <div className="App">
//             <Greeting />
//         </div>
//     );
// }

function App() {
    return (
        <div className="App">
            <Async />
        </div>
    );
}

export default App;
