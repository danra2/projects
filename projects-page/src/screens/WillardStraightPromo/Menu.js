import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink,
} from "reactstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="transparent" dark expand="md" id="bootstrap-overrides">
          <NavbarBrand href="https://cornellsun.com/">
            <img
              src={require("./images/sunLogo.png")}
              id="sunLogo"
              alt="Daily Sun Logo"
            />
            {/* GOLD HEX: bd9d6b */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <br />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="#home" smooth={true} className="nav-link">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#news" smooth={true} className="nav-link">
                  NEWS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#oped" smooth={true} className="nav-link">
                  OPINION
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/WillardStraightTimeline" smooth={true} className="nav-link">
                  TIMELINE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/WillardStraightPhotos" smooth={true} className="nav-link">
                  PHOTOS
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
