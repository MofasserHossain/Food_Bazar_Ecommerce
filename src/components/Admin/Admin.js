import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../MangeProduct/ManageProduct';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="sidebar">
        <Link to={`${url}`}>
          <span>
            <FontAwesomeIcon icon={faThLarge} />
          </span>
          Manage Product
        </Link>
        <Link to={`${url}/addProduct`}>
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Add Product
        </Link>
        <Link to={`${url}/editProduct`}>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
          Edit Product
        </Link>
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
