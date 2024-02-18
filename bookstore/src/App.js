import logo from './logo.svg';
import './App.css';
import ClientSelectComponent from './Pages/ClientSelect/ClientSelectComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import RegitserComponent from './Pages/Register/RegisterComponent';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ClientSelectComponent} />
          <Route exact path={'/Register/:userType'} component={RegitserComponent} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      
      </BrowserRouter>
    
    </>
    
  )
}

export default App;
