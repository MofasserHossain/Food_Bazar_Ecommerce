import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderCard from '../OrderCard/OrderCard';
import './Order.css';

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [orderProfile, setOrderProfile] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setOrderProfile(data[0]);
      });
  }, []);
  console.log(orders);
  // const { displayName, email, photo } = orderProfile;
  const totalPrice = orders.reduce(
    (total, product) => total + Number(product.price),
    0
  );
  return (
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
      <Table hover className="mt-4">
        <thead>
          <tr>
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
            <td colSpan="3">Total</td>
            <td>{totalPrice} $</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
