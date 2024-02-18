import logo from './logo.svg';
import './App.css';
import ClientSelectComponent from './Pages/ClientSelect/ClientSelectComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={ClientSelectComponent} />
        </Switch>
      
      </BrowserRouter>
    
    </>
    
  )
}

export default App;
