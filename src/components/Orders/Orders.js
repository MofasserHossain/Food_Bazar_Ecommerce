import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderCard from '../OrderCard/OrderCard';
import './Order.css';

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [orderProfile, setOrderProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState({
    loadData: false,
  });
  useEffect(() => {
    fetch(
      `https://obscure-fortress-09030.herokuapp.com/orders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setOrderProfile(data[0]);
        setLoading(true);
        setReloadData({
          loadData: true,
        });
      });
  }, [reloadData]);
  // console.log(orders);
  // const { displayName, email, photo } = orderProfile;
  const totalPrice = orders.reduce(
    (total, product) => total + Number(product.price),
    0
  );
  return (
    <>
      {loading ? (
        <Container>
          <h1 className="text-center pt-3">ORDER LIST</h1>
          {orderProfile && (
            <div className="userProfile d-flex py-3">
              <div className="img">
                <img src={orderProfile.photo} alt={orderProfile.displayName} />
              </div>
              <div className="card-content mt-2 ml-3">
                <h4>{orderProfile.displayName}</h4>
                <p>{orderProfile.email}</p>
              </div>
            </div>
          )}
          <h4 className="mt-md-4">Orders Information</h4>
          <Table responsive className="mt-4">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Name</th>
                <th>Weight</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
              <tr>
                <td colSpan="4">Total</td>
                <td>{totalPrice} $</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </>
  );
};

export default Orders;
