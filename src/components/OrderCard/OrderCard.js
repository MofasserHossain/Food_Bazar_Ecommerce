import React from 'react';
import './OrderCard.css';
const OrderCard = ({ order }) => {
  const { name, price, weight } = order;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {weight} {weight > 5 ? 'g' : 'Kg'}
      </td>
      <td>1</td>
      <td>{price} $</td>
    </tr>
  );
};

export default OrderCard;
