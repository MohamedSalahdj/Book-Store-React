// import logo from './logo.svg';
import "./App.css";
import ViewBook from "./Pages/ViewBook/ViewBook";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/details/:id"} component={ViewBook}></Route>
        </Switch>
      </BrowserRouter>

      {/* <ViewBook /> */}
    </div>
  );
}

export default App;
