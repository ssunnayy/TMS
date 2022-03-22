import React, { useState, useEffect } from "react";
import {Link, navigate} from '@reach/router';
import axios from "axios";
import "../App.css";

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
      <header>
        <h1>Transportation Management System</h1>
        <p>
          <Link to={"/"}>List of all Equipment</Link>
        </p>
      </header>

      <header>
        <h2> Details About Equipment Number: {oneEquipment.eqpNumber}</h2>
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