import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  handleGoogleSignIn,
  initializeFirebaseFramework,
} from './LoginManager';
import './Login.css';

const Login = () => {
  // . location
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  initializeFirebaseFramework();
  //   const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    displayName: '',
    email: '',
    photo: '',
    password: '',
    error: '',
    success: false,
    updateUser: false,
  });
  // console.log('log', loggedInUser);
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  return (
    <div className="formDiv">
      <div className="otherSignIn text-center">
        <p>Login</p>
        <button onClick={googleSignIn}>
          <span className="google">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          Sign In With Google
        </button>
        <br />
      </div>
    </div>
  );
};

export default Login;
