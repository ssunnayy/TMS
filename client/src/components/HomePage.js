import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck from "../images/truck.jpg";


function HomePage() {
    return (
      <div >

        <Navbar bg="black" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand >
            <img src={truck} width="50px" height="40px" />{' '}
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
             <Navbar.Collapse>

             <Nav>
            
            <Nav.Link href="/tms/new">Add New Equipment</Nav.Link>
            <Nav.Link href="/">Dashboard</Nav.Link>
            
          </Nav>
            </Navbar.Collapse>

        </Navbar>

        <div>
        <img src={truck} className="homepic" />{' '}
        </div>

    
        <div>
        <Button variant="info" size="lg" href="/tms/new" className="btn">
         Add New Equipment
        </Button>
        </div>  

        <div>
        <Button variant="info" size="lg" href="/" className="btn">
         Dashboard
        </Button>
        </div>

        
      
      </div>
    );
  }
  
  export default HomePage;