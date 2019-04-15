import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
                <NavLink href="#home">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#news">NEWS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#oped">OPED</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#timeline">TIMELINE</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
