import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodCard from '../FoodCard/FoodCard';
import './Home.css';
const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allProducts')
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return (
    <Container>
      <Row>
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
