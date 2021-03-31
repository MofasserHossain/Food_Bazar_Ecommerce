import React from 'react';

const ProductCard = (props) => {
  const { _id, name, price, weight } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {weight} {weight > 5 ? 'g' : 'Kg'}
      </td>
      <td>{price} $</td>
      <td>
        <button>Edit</button>{' '}
        <button onClick={() => props.handleDeleteProduct(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductCard;
