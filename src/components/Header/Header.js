import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Navbar bg="light" expand="lg" className="menu fixed-top">
      <Container>
        <Navbar.Brand className="logo">
          <Link className="p-3" to="/">
            FOOD BAZAR
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu__items">
            <Link className="menu-links" to="/">
              Home
            </Link>
            <Link className="menu-links" to="/orders">
              Orders
            </Link>
            <Link className="menu-links" to="/admin">
              Admin
            </Link>
            <Link className="menu-links" to="/">
              Deals
            </Link>
            {loggedInUser.email ? (
              <>
                <span className="user">
                  <img
                    src={loggedInUser.photo}
                    alt={loggedInUser.displayName}
                  />
                </span>
                <Button title="Log Out" className="btn logOut" href="/">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>
              </>
            ) : (
              <Button className="button button--login btn-success">
                <Link to="/login">Log In</Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
