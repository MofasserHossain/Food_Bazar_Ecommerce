import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './ManageProduct.css';

const ManageProduct = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allProducts')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);
  const handleDeleteProduct = (productKey) => {
    console.log(productKey);
    fetch(`http://localhost:5000/delete/${productKey}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          history.push('/manageProduct');
        }
      });
  };
  return (
    <>
      <div className="sidebar">
        <Link to={'/manageProduct'}>Manage Product</Link>
        <Link to={'/addProduct'}>Add Product</Link>
        <Link to={'/editProduct'}>Edit Product</Link>
      </div>
      <div className="content ">
        <h3 className="mx-4 py-3">Manage Product</h3>
        <Table hover>
          <thead className="product  color">
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductCard
                handleDeleteProduct={handleDeleteProduct}
                product={product}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ManageProduct;
