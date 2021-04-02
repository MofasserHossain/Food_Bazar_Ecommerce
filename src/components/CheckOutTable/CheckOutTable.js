import React from 'react';
import { Table } from 'react-bootstrap';

const CheckOutTable = (props) => {
  const { name, price } = props.checkOut;
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="orderData">
          <td>{name}</td>
          <td>1</td>
          <td>{price} $</td>
        </tr>
        <tr>
          <td colSpan="2">Total</td>
          <td>{price} $</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CheckOutTable;
