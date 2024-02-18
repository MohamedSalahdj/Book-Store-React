
import './App.css';
import Login from './Pages/Login/Login';

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
   
    <>
      <BrowserRouter>
      <Login/>

      
      </BrowserRouter>
    
    </>
    </div>
  );
}

export default App;
