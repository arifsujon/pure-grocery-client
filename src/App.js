import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Nav, Navbar } from "react-bootstrap";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="container">
          <Navbar bg="gray" expand="md" className="mb-5">
            <Navbar.Brand className="logo" as={Link} to="/">PURE GROCERY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nav-item" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="nav-item" as={Link} to="/orders">Orders</Nav.Link>
                <Nav.Link className="nav-item" as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link className="nav-item" as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/product/:productId">
              <CheckOut></CheckOut>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
