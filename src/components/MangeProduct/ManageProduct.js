import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import './ManageProduct.css';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState({
    loadData: false,
  });
  useEffect(() => {
    fetch('https://obscure-fortress-09030.herokuapp.com/allProducts')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(true);
      });
  }, [reloadData]);
  // console.log(products);
  const handleDeleteProduct = (productKey) => {
    // console.log(productKey);
    fetch(`https://obscure-fortress-09030.herokuapp.com/delete/${productKey}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(true);
        if (data) {
          setReloadData({
            loadData: true,
          });
        }
      });
  };
  return (
    <>
      {loading ? (
        <>
          <h3 className="mx-4 py-3">Manage Product</h3>
          <Table className="product_table">
            <thead className="product color">
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
                  key={product._id}
                  handleDeleteProduct={handleDeleteProduct}
                  product={product}
                />
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default ManageProduct;
