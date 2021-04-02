import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  handleGithubSignIn,
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

  const githubSignIn = () => {
    handleGithubSignIn().then((res) => {
      // console.log(res);
      setUser(res);
      setLoggedInUser(res);
      if (res.success) {
        history.replace(from);
      }
    });
  };
  return (
    <div className="formDiv">
      <div className="otherSignIn text-center">
        <h3>Please Login For Validation</h3>
        {!user.success && <p style={{ color: 'red' }}>{user.error}</p>}
        <button onClick={googleSignIn}>
          <span className="google">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          Sign In With Google
        </button>

        <br />
        <button onClick={githubSignIn}>
          <span className="github">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          Sign In With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
