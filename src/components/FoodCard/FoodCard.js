import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = (props) => {
  const { name, pic, price } = props.food;
  return (
    <Col md={6} lg={3} className="my-3">
      <div className="foodCard">
        <img
          src={require('../../images/Fresh_Chinigura_Chal_1_kg.jpg').default}
          alt={name}
        />
        <h5 className="text-center mt-2">{name}</h5>
        <div className="d-flex justify-content-between card__bottom">
          <span>{price} $</span>
          <button
            onClick={() => props.handleBuyNow(props)}
            className="btn btn-success"
          >
            <Link to={'/checkout'}>Buy Now</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default FoodCard;
