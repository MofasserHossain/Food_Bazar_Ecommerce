import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
const ProductCard = (props) => {
  const { _id, name, price, weight } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {weight} {weight > 5 ? 'g' : 'Kg'}
      </td>
      <td>{price}$</td>
      <td>
        <button className="btn edit">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className="btn delete"
          onClick={() => props.handleDeleteProduct(_id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
