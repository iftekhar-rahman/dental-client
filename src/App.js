import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctors from './components/AddDoctors/AddDoctors';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/add-doctors">
            <AddDoctors></AddDoctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
