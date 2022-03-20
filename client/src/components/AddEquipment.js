import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";

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
        <header>Transport Manager System</header>


        <form onSubmit={submitHandler}>
                <div >
                    <label>Equipment Number</label>
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
                    <label>Equipment Brand</label>
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
                    <label>Equipment Type</label>
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
                    <label>Equipment Price</label>
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
                    <label>Equipment Monthly Payment</label>
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
                    <label>Loan Lender</label>
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
                    <label>Loan Interest Rate</label>
                    <input
                        onChange={(e) => setInterestRate(e.target.value)}
                        value={interestRate}
                        name="interestRate"
                        type="number"
                    />
                    {errors.interestRate ? <span>{errors.interestRate.message}</span> : null}
                </div>

                <br />
                
                <input className="submit-input" type="submit" value="Add Equipment" />
            </form>
      
    </div>
  );
};

export default AddEquipment;