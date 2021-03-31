import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';
const axios = require('axios');

const CheckOut = () => {
  const { id } = useParams();
  const [checkoutProduct, setCheckoutProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckoutProduct(data[0]);
      });
  }, []);

  const { name, price } = checkoutProduct;
  const checkOut = () => {
    const productDetails = {
      ...loggedInUser,
      ...checkoutProduct,
      date: new Date(),
    };
    console.log('product', productDetails);
    axios
      .post('http://localhost:5000/addOrder', productDetails)
      .then((res) => {
        console.log('response', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div className="checkoutPage">
        <h3>CheckOut</h3>
        <div className="checkout__table">
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>1</td>
                <td>{price}</td>
              </tr>
              <tr>
                <td colSpan="2">Total</td>
                <td>{price} $</td>
              </tr>
            </tbody>
          </Table>
          <button
            className="btn btn-success float-right button"
            onClick={checkOut}
          >
            <Link to={'/orders'}>Check Out</Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
