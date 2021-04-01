import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';
const NotFound = () => {
  const history = useHistory();
  const backHome = () => {
    history.push('/');
  };
  return (
    <div className="notFound">
      <h3>404</h3>
      <p>Page Not Found</p>
      <button className="btn btn-success" onClick={backHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
