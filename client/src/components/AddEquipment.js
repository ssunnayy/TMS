import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck from "../images/truck.jpg";


const AddEquipment = (props) => {
  const [errors, setErrors] = useState({});
  const [eqpNumber, setEqpNumber] = useState("");
  const [eqpBrand, setEqpBrand] = useState("");
  const [eqpType, setEqpType] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");
  const [lender, setLender] = useState("");
  const [interestRate, setInterestRate] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/tms`, {
        eqpNumber,  
        eqpBrand,
        eqpType,
        price,
        payment,
        lender,
        interestRate,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
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
            <Nav.Link href="/">Dashboard</Nav.Link>
            
          </Nav>

             </Navbar.Collapse>
            

        </Navbar>
        <h1>Add New Equipment</h1>
        <Container>
        <Stack gap={2} className="col-md-5 mx-auto">
        <Form onSubmit={submitHandler}>
                {/* <div >
                    <label>Number</label>
                    <input
                        onChange={(e) => setEqpNumber(e.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={eqpNumber}
                        name="eqpNumber"
                        type="number"
                    />
                    {errors.eqpNumber ? <span>{errors.eqpNumber.message}</span> : null}
                </div> */}

                <Form.Group className="mb-3" controlId="eqpNumber">
                <Form.Label></Form.Label>
                <Form.Control
                type="number"  
                value={eqpNumber}
                name="eqpNumber"
                onChange={(e) => setEqpNumber(e.target.value)}
                placeholder="Equipment Number"/>
                </Form.Group>



                {/* <div>
                    <label>Brand</label>
                    <input
                        onChange={(e) => setEqpBrand(e.target.value)}
                        value={eqpBrand}
                        name="eqpBrand"
                        type="text"
                    />
                    {errors.eqpBrand ? <span>{errors.eqpBrand.message}</span> : null}
                </div> */}

                <Form.Group className="mb-3" controlId="eqpBrand">
                <Form.Label></Form.Label>
                <Form.Control
                type="text"  
                value={eqpBrand}
                name="eqpBrand"
                onChange={(e) => setEqpBrand(e.target.value)}
                placeholder="Equipment Brand"/>
                </Form.Group>


                {/* <div>
                    <label>Type</label>
                    <input
                        onChange={(e) => setEqpType(e.target.value)}
                        value={eqpType}
                        name="eqpType"
                        type="text"
                    />
                    {errors.eqpType ? <span>{errors.eqpType.message}</span> : null}
                </div> */}


                <Form.Group className="mb-3" controlId="eqpType">
                <Form.Label></Form.Label>
                <Form.Control
                type="text"  
                value={eqpType}
                name="eqpType"
                onChange={(e) => setEqpType(e.target.value)}
                placeholder="Equipment Type"/>
                </Form.Group>

         
{/* 
                <div>
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                    {errors.price ? <span>{errors.price.message}</span> : null}
                </div> */}

                <Form.Group className="mb-3" controlId="price">
                <Form.Label></Form.Label>
                <Form.Control
                type="text"  
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Equipment Price"/>
                </Form.Group>


                {/* <div>
                    <label>Monthly Payment</label>
                    <input
                        onChange={(e) => setPayment(e.target.value)}
                        value={payment}
                        name="payment"
                        type="number"
                    />
                    {errors.payment ? <span>{errors.payment.message}</span> : null}
                </div> */}


                <Form.Group className="mb-3" controlId="price">
                <Form.Label></Form.Label>
                <Form.Control
                type="number"  
                value={payment}
                name="payment"
                onChange={(e) => setPayment(e.target.value)}
                placeholder="Monthly Payment"/>
                </Form.Group>


                {/* <div>
                    <label>Lender</label>
                    <input
                        onChange={(e) => setLender(e.target.value)}
                        value={lender}
                        name="lender"
                        type="text"
                    />
                    {errors.lender ? <span>{errors.lender.message}</span> : null}
                </div> */}

                <Form.Group className="mb-3" controlId="lender">
                <Form.Label></Form.Label>
                <Form.Control
                type="text"  
                value={lender}
                name="lender"
                onChange={(e) => setLender(e.target.value)}
                placeholder="Lender"/>
                </Form.Group>


                {/* <div>
                    <label>Int Rate</label>
                    <input
                        onChange={(e) => setInterestRate(e.target.value)}
                        value={interestRate}
                        name="interestRate"
                        type="number"
                    />
                    {errors.interestRate ? <span>{errors.interestRate.message}</span> : null}
                </div> */}

                <Form.Group className="mb-3" controlId="interestRate">
                <Form.Label></Form.Label>
                <Form.Control
                type="number"  
                value={interestRate}
                name="interestRate"
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Interest Rate"/>
                </Form.Group>

               
                
                {/* <input className="submit-input" type="submit" value="Add Equipment" /> */}
                <button variant="success"> Add Equipment</button>
            </Form>
            </Stack>
            </Container>
      
    </div>
  );
};

export default AddEquipment;