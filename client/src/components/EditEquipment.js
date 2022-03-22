import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";

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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <header>Transport Manager System</header>


<form onSubmit={updateSubmitHandler}>
        <div >
            <label>Number</label>
            <input
                onChange={(e) => setEqpNumber(e.target.value)}               
                name="eqpNumber"
                value={eqpNumber}
                
            />
        </div>

        <br />

        <div>
            <label>Brand</label>
            <input
                onChange={(e) => setEqpBrand(e.target.value)}
                name="eqpBrand"
                value={eqpBrand}
                
            />
        </div>

        <br />

        <div>
            <label>Type</label>
            <input
                onChange={(e) => setEqpType(e.target.value)}
                name="eqpType"
                value={eqpType}
                
            />
        </div>

        <br />

        <div>
            <label>Price</label>
            <input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                value={price}
                
            />
        </div>

        <br />

        <div>
            <label>Monthly Payment</label>
            <input
                onChange={(e) => setPayment(e.target.value)}
                name="payment"
                value={payment}
                
            />
        </div>

        <br />

        <div>
            <label>Lender</label>
            <input
                onChange={(e) => setLender(e.target.value)}
                name="lender"
                value={lender}
            />
        </div>

        <br />

        <div>
            <label>Int Rate</label>
            <input
                onChange={(e) => setInterestRate(e.target.value)}
                name="interestRate"
                value={interestRate}
                
            />
        </div>

        <br />
        {/* Could also be a button element. Try it! */}
        <input className="submit-input" type="submit" value="Update Equipment" />
    </form>
    </div>
  );
};

export default EditEquipment;