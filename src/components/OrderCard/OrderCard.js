import React from 'react';
import './OrderCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const OrderCard = (props) => {
  const { _id, name, ProductImage, price, weight } = props.order;
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
        {weight} {weight > 10 ? 'g' : 'Kg'}
      </td>
      <td>1</td>
      <td>{price}$</td>
      <td>
        <button
          className="btn delete"
          onClick={() => props.handleDeleteOrder(_id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default OrderCard;
