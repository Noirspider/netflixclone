import React from "react";
import LogoNetflix from "./assets/netflix_logo.png";
import Avatar from "./assets/avatar.png";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { BsFillBellFill, BsSearch } from "react-icons/bs";

function MyNavbar() {
  return (
    <Navbar>
      <Navbar.Brand>
        <img src={LogoNetflix} id="logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>TV Shows</Nav.Link>
          <Nav.Link>Movies</Nav.Link>
          <Nav.Link>Recently Added</Nav.Link>
          <Nav.Link>My List</Nav.Link>
        </Nav>
        <Nav id="user">
          <BsSearch className="navIcon" />
          <BsFillBellFill className="navIcon" />
          <Nav.Link>Gianluca</Nav.Link>
          <NavDropdown title={<img src={Avatar} id="avatar" alt="propic" />}>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
