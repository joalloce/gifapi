import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { connect } from "react-redux";
import { getGifs } from "../actions/gifActions";

const AppNavbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const onChange = e => {
    setSearch(e.target.value)
  } 
  const onSubmit = e => {
    e.preventDefault()
    props.getGifs(search)
  }
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Gif Api</NavbarBrand>
      <NavbarToggler onClick={() => setOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
              <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onChange}
                />
                <button className="btn btn-dark my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default connect(null,{getGifs})(AppNavbar);
