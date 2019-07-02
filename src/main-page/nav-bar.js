import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const NaviBar = () => (
  /*<nav class="nav-bar navbar-expand-lg navbar-dark ">
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="">tindog</a>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#footer">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#cta">Download</a>
            </li>
          </ul>
        </div>
      </nav>*/
  <Navbar  expand="lg">
    <Link to="/">
      <Navbar.Brand>tindog</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item >
          <Nav.Link  href="#footer">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="#pricing">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="#cta">Download</Nav.Link>
        </Nav.Item> 
        <Nav.Item>         
          <Nav.Link>
            <Link className="mem-link"to="/member">
              Members
            </Link>  
          </Nav.Link>
        </Nav.Item> 
      </Nav>
    </Navbar.Collapse>
</Navbar>
);

export default NaviBar;