import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../MangeProduct/ManageProduct';
import './Admin.css';

const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="sidebar">
        <Link to={`${url}`}>Manage Product</Link>
        <Link to={`${url}/addProduct`}>Add Product</Link>
        <Link to={`${url}/editProduct`}>Edit Product</Link>
      </div>
      <div className="content">
        <Switch>
          <Route exact path={path}>
            <ManageProduct />
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Admin;
