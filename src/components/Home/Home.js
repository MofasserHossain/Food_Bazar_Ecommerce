import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import FoodCard from '../FoodCard/FoodCard';
import './Home.css';
const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch('https://obscure-fortress-09030.herokuapp.com/allProducts')
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(true);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Container>
          <Row>
            {foods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </Row>
        </Container>
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </>
  );
};

export default Home;
