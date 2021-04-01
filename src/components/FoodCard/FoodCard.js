import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = (props) => {
  const { _id, name, imageUrl, price, weight } = props.food;
  return (
    <Col md={6} lg={3} className="my-3">
      <div className="foodCard">
        <img src={imageUrl} alt={name} />
        <h5 className="text-center mt-2">
          {name} - {weight}
          {weight > 5 ? 'g' : 'Kg'}
        </h5>
        <div className="d-flex justify-content-between card__bottom">
          <span className="price">{price}$</span>
          <button className="btn btn-success">
            <Link to={`/checkout/${_id}`}>Buy Now</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default FoodCard;
