import React from "react"
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
  DropdownItem,
} from "reactstrap"

import Logo from "../images/logo.png"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar
          color="white"
          style={{ fontFamily: "montserrat" }}
          light
          expand="md"
          fixed="top"
        >
          <NavbarBrand href="/">
            <img style={{ width: "70%" }} src={Logo} alt="loudspeaker" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/whoweare">Who we are</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Digital Marketing</DropdownItem>
                  <DropdownItem divider /> <DropdownItem>Branding</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Printing</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Market Research</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/">Insight</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Rebel</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Reviews</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Resources</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
