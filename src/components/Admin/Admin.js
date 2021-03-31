import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  return (
    <>
      <div className="sidebar">
        <Link to={'/manageProduct'}>Manage Product</Link>
        <Link to={'/addProduct'}>Add Product</Link>
        <Link to={'/editProduct'}>Edit Product</Link>
      </div>
      <div className="content">
        <h3>ManageMent</h3>
      </div>
    </>
  );
};

export default Admin;
