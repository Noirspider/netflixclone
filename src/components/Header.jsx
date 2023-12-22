import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../style.css";

function Header() {
  return (
    <div className="header-main">
      <div className="btnHeader">
        <p className="txtHeader">Movies</p>
        <Dropdown>
          <Dropdown.Toggle className="btnGenres">Genere</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
            <Dropdown.Item href="#">TV Series</Dropdown.Item>
            <Dropdown.Item href="#">ANIME</Dropdown.Item>
            <Dropdown.Item href="#">SPIDER-MAN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
