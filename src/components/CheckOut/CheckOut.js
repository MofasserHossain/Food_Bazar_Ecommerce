import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import CheckOutTable from '../CheckOutTable/CheckOutTable';
import './CheckOut.css';
const axios = require('axios');

const CheckOut = () => {
  // .
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(`https://obscure-fortress-09030.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckoutProduct(data[0]);
        setLoading(true);
      });
  }, []);

  const { name, price, weight, imageUrl } = checkoutProduct;
  // . this is for not inserting product id and avoid error
  const newCheckoutProduct = {
    name: name,
    price: price,
    weight: weight,
    image: imageUrl,
  };

  const checkOut = () => {
    const productDetails = {
      ...loggedInUser,
      ...newCheckoutProduct,
      date: new Date(),
    };
    console.log('product', productDetails);
    axios
      .post(
        'https://obscure-fortress-09030.herokuapp.com/addOrder',
        productDetails
      )
      .then((res) => {
        console.log('response', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {loading ? (
        <Container>
          <div className="checkoutPage">
            <h3>CheckOut</h3>
            <div className="checkout__table">
              <CheckOutTable checkOut={checkoutProduct} />
              <button
                className="btn btn-success float-right button"
                onClick={checkOut}
              >
                <Link to={'/orders'}>Check Out</Link>
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </>
  );
};

export default CheckOut;
