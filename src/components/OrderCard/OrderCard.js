import React from 'react';
import './OrderCard.css';
const OrderCard = ({ order }) => {
  const { name, image, price, weight } = order;
  return (
    <tr className="orderData">
      <td>
        <img style={{ width: '50px' }} src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>
        {weight} {weight > 5 ? 'g' : 'Kg'}
      </td>
      <td>1</td>
      <td>{price}$</td>
    </tr>
  );
};

export default OrderCard;
