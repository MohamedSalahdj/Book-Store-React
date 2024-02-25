// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NavBarComponent from "./Components/NavBarComponent";
import ClientSelectComponent from "./Pages/ClientSelect/ClientSelectComponent";
import RegitserComponent from "./Pages/Register/RegisterComponent";
import Login from "./Pages/Login/Login";
import ViewBook from "./Pages/ViewBook/ViewBook";
import PublisherOrderList from "./Pages/PublisherOrder/PunlisherOrderList";
import ListBooks from "./Pages/ListBooks/ListBooks";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/books"} component={ListBooks} />
          <Route exact path={"/register"} component={ClientSelectComponent} />
          <Route
            exact
            path={"/register/:userType"}
            component={RegitserComponent}
          />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/details/:id"} component={ViewBook} />
          <Route exact path={"/publisherorder"} component={PublisherOrderList} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
