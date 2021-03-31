import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData.json';
import FoodCard from '../FoodCard/FoodCard';
import './Home.css';
const Home = () => {
  const [foods, setFoods] = useState([]);
  console.log(fakeData);
  useEffect(() => {
    // fetch('https://serene-garden-27348.herokuapp.com/allEvents')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setEvents(data);
    //   });
    setFoods(fakeData);
  }, []);
  const handleBuyNow = (product) => {
    console.log(product.food);
  };
  return (
    <Container>
      <Row>
        {foods.map((food) => (
          <FoodCard key={food.name} handleBuyNow={handleBuyNow} food={food} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
