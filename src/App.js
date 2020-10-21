import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import { Switch, Route, Link } from "react-router-dom";
import OrderStatus from "./components/OrderStatus/OrderStatus";
import { Navbar, Nav, NavDropdown, NavItem}  from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import ViewDetails from "./components/OrderStatus/ViewDetails/ViewDetails";

function App() {
  return (
    <div className="App">
    {/* <Toolbar />
      <Switch>
        <Route path="/orderStatus">
        <OrderStatus /> 
        </Route>
    </Switch> */}

      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">ATT</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Brands</Nav.Link>
        <Nav.Link href="">Deals</Nav.Link>
        <Nav.Link href="">Services</Nav.Link>
        </Nav>
        <Nav>
        <NavDropdown title="Account" id="collasible-nav-dropdown">
        </NavDropdown>
        <Nav.Link href="">Recently Viewed</Nav.Link>
        <NavDropdown title="Recently Viewed" id="collasible-nav-dropdown">
        </NavDropdown>
        <LinkContainer to="/orderStatus">
        <Nav.Link href="">Order Status</Nav.Link>
            </LinkContainer>
            <Nav.Link href="">Saved Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
    <Route exact path="/orderStatus">
    <OrderStatus /> 
    </Route>
    <Route path='/orderStatus/viewDetails'>
        <ViewDetails /> 
        </Route>
        
    </Switch>
    </div>
  );
}

export default App;
