import React from 'react';
import './OrderCard.css';
const OrderCard = ({ order }) => {
  const { name, ProductImage, price, weight } = order;
  return (
    <tr className="orderData">
      <td>
        <img
          style={{ width: '50px', borderRadius: '5px' }}
          src={ProductImage}
          alt=""
        />
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
