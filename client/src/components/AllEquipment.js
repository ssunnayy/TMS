import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck from "../images/truck.jpg";



const AllEquipment = (props) => {
  const [eqpList, setEqpList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tms")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setEqpList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/tms/${id}`)
      .then((res) => {
        console.log(res.data);
        setEqpList(eqpList.filter((tms) => tms._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = (e) => {
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) =>{
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
            
             <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/tms/new">Add New Equipment</Nav.Link>
            <Nav.Link href="/api/quote">Bid Quotation</Nav.Link>
            <Button onClick={logout} variant="info">Logout</Button>          
            
          </Nav>

             </Navbar.Collapse>
            

        </Navbar>



      <header className="header">
        <h1>List of All the Equipment</h1>
      </header>
      <Table >
        <thead  >
          <tr>
            <th>Number</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Lender</th>
            <th>Int Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {eqpList
            ? eqpList.map((tms, index) => (
                <tr key={index}>
                  <td >{tms.eqpNumber}</td>
                  <td >{tms.eqpBrand}</td>
                  <td >{tms.eqpType}</td>
                  <td >{tms.price}</td>
                  <td >{tms.payment}</td>
                  <td >{tms.lender}</td>
                  <td >{tms.interestRate}</td>

                  <td >
                    <Link to={`/tms/${tms._id}`}>details | </Link>
                    <Link to={`/tms/${tms._id}/edit`}> edit</Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default AllEquipment;