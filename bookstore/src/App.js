import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import NavBarComponent from './Components/NavBarComponent';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBarComponent></NavBarComponent>
      <HomePage></HomePage>
      </BrowserRouter>
    </>
  );
}

export default App;
