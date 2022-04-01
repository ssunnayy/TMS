import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck from "../images/truck.jpg";

const EditEquipment = (props) => {
const { id } = props;
const [errors, setErrors] = useState({});
const [eqpNumber, setEqpNumber] = useState("");
const [eqpBrand, setEqpBrand] = useState("");
const [eqpType, setEqpType] = useState("");
const [price, setPrice] = useState("");
const [payment, setPayment] = useState("");
const [lender, setLender] = useState("");
const [interestRate, setInterestRate] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tms/${id}`)
      .then((res) => {
        console.log(res.data);
        setEqpNumber(res.data.eqpNumber);
        setEqpBrand(res.data.eqpBrand);
        setEqpType(res.data.eqpType);
        setPrice(res.data.price);
        setPayment(res.data.payment);
        setLender(res.data.lender);
        setInterestRate(res.data.interestRate);
      })

      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  const updateSubmitHandler = (e) => {
    e.preventDefault();

    const putUpdateData = {
    eqpNumber,  
    eqpBrand,
    eqpType,
    price,
    payment,
    lender,
    interestRate,

    };
    axios
      .put(`http://localhost:8000/api/tms/${id}`, putUpdateData)
      .then((res) => {
        console.log(res.data);
        navigate("/tms/dash");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
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
            <Nav.Link href="/tms/dash">Dashboard</Nav.Link>
            <Nav.Link href="/api/quote">Bid Quotation</Nav.Link>
            <Button onClick={logout} variant="info">Logout</Button> 
          </Nav>

             </Navbar.Collapse>
            

        </Navbar>
        <h1>Edit Your Equipment</h1>
      

      <Container>
        <Stack gap={2} className="col-md-5 mx-auto">
      <Form onSubmit={updateSubmitHandler}>
        {/* <div >
            <label>Number</label>
            <input
                onChange={(e) => setEqpNumber(e.target.value)}               
                name="eqpNumber"
                value={eqpNumber}
                
            />
        </div> */}

                <Form.Group className="mb-3" controlId="eqpNumber">
                <Form.Label>Equipment Number</Form.Label>
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
                name="eqpBrand"
                value={eqpBrand}
                
            />
        </div> */}

                <Form.Group className="mb-3" controlId="eqpBrand">
                <Form.Label>Brand</Form.Label>
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
                name="eqpType"
                value={eqpType}
                
            />
        </div> */}

              <Form.Group className="mb-3" controlId="eqpType">
                <Form.Label>Equipment Type</Form.Label>
                <Form.Control
                type="text"  
                value={eqpType}
                name="eqpType"
                onChange={(e) => setEqpType(e.target.value)}
                placeholder="Equipment Type"/>
                </Form.Group>

        {/* <br />

        <div>
            <label>Price</label>
            <input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                value={price}
                
            />
        </div> */}

                <Form.Group className="mb-3" controlId="price">
                <Form.Label>Equipment Price</Form.Label>
                <Form.Control
                type="text"  
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Equipment Price"/>
                </Form.Group>

        {/* <br /> */}

        {/* <div>
            <label>Monthly Payment</label>
            <input
                onChange={(e) => setPayment(e.target.value)}
                name="payment"
                value={payment}
                
            />
        </div>
        <br /> */}

                <Form.Group className="mb-3" controlId="price">
                <Form.Label>Monthly Payment</Form.Label>
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
                name="lender"
                value={lender}
            />
        </div> */}

                <Form.Group className="mb-3" controlId="lender">
                <Form.Label>Lender</Form.Label>
                <Form.Control
                type="text"  
                value={lender}
                name="lender"
                onChange={(e) => setLender(e.target.value)}
                placeholder="Lender"/>
                </Form.Group>

        <br />

        {/* <div>
            <label>Int Rate</label>
            <input
                onChange={(e) => setInterestRate(e.target.value)}
                name="interestRate"
                value={interestRate}
                
            />
        </div> */}

                <Form.Group className="mb-3" controlId="interestRate">
                <Form.Label>Interest Rate</Form.Label>
                <Form.Control
                type="number"  
                value={interestRate}
                name="interestRate"
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Interest Rate"/>
                </Form.Group>

        {/* <br /> */}
        {/* Could also be a button element. Try it! */}
        <Button type="submit" variant="info">Sign In</Button>{' '}
        </Form>
            </Stack>
            </Container>


    </div>
  );
};

export default EditEquipment;