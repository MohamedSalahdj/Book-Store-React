import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import NavBarComponent from './Components/NavBarComponent';
import ClientSelectComponent from './Pages/ClientSelect/ClientSelectComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import RegitserComponent from './Pages/Register/RegisterComponent';
import Login from './Pages/Login/Login';

function App() {
  return (
   <>
      <BrowserRouter>
      <NavBarComponent></NavBarComponent>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/Register'} component={ClientSelectComponent} />
          <Route exact path={'/Register/:userType'} component={RegitserComponent} />
          <Route exact path={'/login'} component={Login} />
        </Switch>  
      </BrowserRouter>
    </>
    
  )
}

export default App;
