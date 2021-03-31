import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  return (
    <>
      <div class="sidebar">
        <Link to={'/manageProduct'}>Manage Product</Link>
        <Link to={'/addProduct'}>Add Product</Link>
        <Link to={'/editProduct'}>Edit Product</Link>
      </div>
      <div class="content">
        <h2>Responsive Sidebar Example</h2>
        <p>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </p>
        <p>
          We have also added a media query for screens that are 400px or less,
          which will vertically stack and center the navigation links.
        </p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </>
  );
};

export default Admin;
