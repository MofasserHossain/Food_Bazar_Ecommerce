import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';
import { UserContext } from '../../App';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
            <Link className="menu-links" to="/details">
              Details
            </Link>
            {loggedInUser.email ? (
              <span className="userName">{loggedInUser.displayName}</span>
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
