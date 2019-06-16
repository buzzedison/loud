import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

              <NavItem>
                {" "}
                <NavLink href="/services"> Services</NavLink>{" "}
              </NavItem>

              <NavItem>
                <NavLink href="/insights">Insight</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/rebel">Rebel</NavLink>
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
