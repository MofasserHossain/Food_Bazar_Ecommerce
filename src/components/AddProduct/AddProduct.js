import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddProduct.css';
import { UserContext } from '../../App';
const axios = require('axios');

const AddProduct = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [loadImage, setLoadImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageUrl: imageUrl,
    };
    console.log(productData);
    const url = `http://localhost:5000/addProduct`;
    axios
      .post(url, productData)
      .then((res) => {
        console.log('response', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const error = {
    color: 'red',
    display: 'block',
  };
  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', ' 65fc8ae8a7308f953fbf7a8227f54858');
    imageData.append('image', e.target.files[0]);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        console.log(response);
        setImageUrl(response.data.data.display_url);
        setLoadImage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="sidebar">
        <Link to={'/manageProduct'}>Manage Product</Link>
        <Link to={'/addProduct'}>Add Product</Link>
        <Link to={'/editProduct'}>Edit Product</Link>
      </div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="from">
            <label htmlFor="">Enter Your Product Name</label>
            <input
              name="name"
              placeholder="Please enter your product Name"
              ref={register({ required: true })}
            />
            {errors.name && <span style={error}>This field is required</span>}
            <label htmlFor="">Enter Your Product Weight</label>
            <input
              name="weight"
              type="number"
              placeholder="Please enter your product weight"
              ref={register({ required: true })}
            />
            {errors.weight && <span style={error}>This field is required</span>}
            <label htmlFor="">Enter Your Product Price</label>
            <input
              name="price"
              type="number"
              placeholder="Please enter your product price"
              ref={register({ required: true })}
            />
            {errors.price && <span style={error}>This field is required</span>}
            <label htmlFor="">Upload Your Product Image</label>
            <input name="image" type="file" onChange={handleImageUpload} />
            <input
              className={
                loadImage ? 'btn btn-primary' : 'btn btn-primary disable'
              }
              style={{ padding: '10px 20px' }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
