import React, { useState, useEffect } from "react";
import {Link, navigate} from '@reach/router';
import axios from "axios";
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck from "../images/truck.jpg";

const OneEquipment = (props) => {
  const { id } = props;
  const [oneEquipment, setOneEquipment] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tms/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneEquipment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/tms/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

<Navbar bg="black" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand >
            <img src={truck} width="50px" height="40px" />{' '}
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
             <Navbar.Collapse>

             <Nav>
             <Nav.Link href="/tms/home">Home</Nav.Link>
            <Nav.Link href="/tms/new">Add New Equipment</Nav.Link>
            <Nav.Link href="/">Dashboard</Nav.Link>
          </Nav>

             </Navbar.Collapse>
            

        </Navbar>
      

      <header>
        <h1> Details About Equipment Number: {oneEquipment.eqpNumber}</h1>
      </header>

      <div>
        <h2> Brand: {oneEquipment.eqpBrand}</h2>
        <h2> Type: {oneEquipment.eqpType}</h2>
        <h2> Price: {oneEquipment.price}</h2>
        <h2> Payment: {oneEquipment.payment}</h2>
        <h2> Lender: {oneEquipment.lender}</h2>
        <h2> Int Rate: {oneEquipment.interestRate}</h2>


      </div>
        <button onClick={deleteHandler} className="deletebutton">
          Delete Equipment # {oneEquipment.eqpNumber}
        </button>
    </div>
  );
};

export default OneEquipment;