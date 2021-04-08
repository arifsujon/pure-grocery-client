import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddProducts from "../AddProducts/AddProducts";
import ManageProduct from "../ManageProduct/ManageProduct";
import './Admin.css';

const Admin = () => {
    return (
       
        <Router>
        <div className="row admin-nav">
          <div className="col-md-2 left">
            <ul>
              <li>
                <Link to="/addProducts">Add Products</Link>
              </li>
              <li>
                <Link to="/manageProduct">Manage Product</Link>
              </li>
            </ul>
          </div>
  
          <hr />
  
          <Switch>
            <Route exact path="/addProducts">
              <AddProducts />
            </Route>
            <Route path="/manageProduct">
              <ManageProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    );
};

export default Admin;