import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Search from './search.jsx';
export default props => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <p>Walmart API</p>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <Search
          onChange={props.onChange}
          //handleSubmit={props.handleSubmit}
          search={props.search}
        />
      </Nav>
    </Navbar>
  );
};
