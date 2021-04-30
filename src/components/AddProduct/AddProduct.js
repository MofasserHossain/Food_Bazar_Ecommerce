import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddProduct.css';
// import { UserContext } from '../../App';
const axios = require('axios');

const AddProduct = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [loadImage, setLoadImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageUrl: imageUrl,
    };
    // console.log(productData);
    const url = `https://obscure-fortress-09030.herokuapp.com/addProduct`;
    axios
      .post(url, productData)
      .then((res) => {
        if (res) {
          history.push('/');
        }
        // console.log('response', res);
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
    // console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', ' 65fc8ae8a7308f953fbf7a8227f54858');
    imageData.append('image', e.target.files[0]);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        // console.log(response);
        setImageUrl(response.data.data.display_url);
        setLoadImage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h3 className="mx-4 py-3">Add Product</h3>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="from">
          <div className="form-top">
            <div className="form_group">
              <label htmlFor="">Product Name</label>
              <input
                name="name"
                placeholder="Please enter your product Name"
                ref={register({ required: true })}
              />
              {errors.name && <span style={error}>This field is required</span>}
            </div>
            <div className="form_group">
              <label htmlFor="">Weight</label>
              <input
                name="weight"
                type="number"
                placeholder="Please enter your product weight"
                ref={register({ required: true })}
              />
              {errors.weight && (
                <span style={error}>This field is required</span>
              )}
            </div>
          </div>
          <div className="form-bottom">
            <div className="form_group">
              <label htmlFor="">Add Price</label>
              <input
                name="price"
                type="number"
                placeholder="Please enter your product price"
                ref={register({ required: true })}
              />
              {errors.price && (
                <span style={error}>This field is required</span>
              )}
            </div>
            <div className="form_group">
              <label htmlFor="">Add Photo</label>
              <input
                className="upload"
                name="image"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <input
            className={
              loadImage ? 'btn btn-success' : 'btn btn-success disable'
            }
            style={{ padding: '10px 20px', margin: '10px' }}
            type="Submit"
          />
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddProduct;
