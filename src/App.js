import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PriavteRoute/PrivateRoute';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound/NotFound';
export const UserContext = createContext();

function App() {
  const [LoggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[LoggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
