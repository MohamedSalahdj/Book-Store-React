import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BooksList from "./Pages/BooksList/BooksList"

function App() {
  return (
    <>

      <BrowserRouter>
        <Switch>
        <Route exact path={"/"} component={BooksList}/>
        </Switch>

      </BrowserRouter>
    </>
  )
}

export default App;
