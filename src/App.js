import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preference from './components/Preferences/Preference';
import Login from './components/Login/Login';
import useToken from "./useToken";


function App() {
  // Use setState to store user login token in memory for now
  // const [token, setToken] = useState(); 

  const { token, setToken } = useToken();
  
  // render login component if token is false, i.e user not logged in
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/preference" component={Preference} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
