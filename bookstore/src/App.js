import logo from './logo.svg';
import './App.css';
import My_Rating from "./Components/My_Rating"
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <My_Rating/>
  );
}

export default App;
