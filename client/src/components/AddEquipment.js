import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";
import { Button } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown  } from "react-bootstrap";
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
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/tms/new">New Equipment</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>

             </Navbar.Collapse>
            

        </Navbar>
        <header>Transport Manager System</header>


        <form onSubmit={submitHandler}>
                <div >
                    <label>Number</label>
                    <input
                        onChange={(e) => setEqpNumber(e.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={eqpNumber}
                        name="eqpNumber"
                        type="number"
                    />
                    {errors.eqpNumber ? <span>{errors.eqpNumber.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Brand</label>
                    <input
                        onChange={(e) => setEqpBrand(e.target.value)}
                        value={eqpBrand}
                        name="eqpBrand"
                        type="text"
                    />
                    {errors.eqpBrand ? <span>{errors.eqpBrand.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Type</label>
                    <input
                        onChange={(e) => setEqpType(e.target.value)}
                        value={eqpType}
                        name="eqpType"
                        type="text"
                    />
                    {errors.eqpType ? <span>{errors.eqpType.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                    {errors.price ? <span>{errors.price.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Monthly Payment</label>
                    <input
                        onChange={(e) => setPayment(e.target.value)}
                        value={payment}
                        name="payment"
                        type="number"
                    />
                    {errors.payment ? <span>{errors.payment.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Lender</label>
                    <input
                        onChange={(e) => setLender(e.target.value)}
                        value={lender}
                        name="lender"
                        type="text"
                    />
                    {errors.lender ? <span>{errors.lender.message}</span> : null}
                </div>

                <br />

                <div>
                    <label>Int Rate</label>
                    <input
                        onChange={(e) => setInterestRate(e.target.value)}
                        value={interestRate}
                        name="interestRate"
                        type="number"
                    />
                    {errors.interestRate ? <span>{errors.interestRate.message}</span> : null}
                </div>

                <br />
                
                {/* <input className="submit-input" type="submit" value="Add Equipment" /> */}
                <button variant="secondry"> Add Equipment</button>
                
            </form>
      
    </div>
  );
};

export default AddEquipment;