import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import "../App.css";



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

  return (
    <div>
      <header className="header">
        <h1>List of All the Equipment</h1>
        <p >
          <Link to={"/tms/new"}>Add New Equipment to the Fleet</Link>
        </p>
      </header>
      <table >
        <thead  >
          <tr>
            <th>Equipment Number</th>
            <th>Equipment Brand</th>
            <th>Equipment Type</th>
            <th>Equipment Price</th>
            <th>Equipment Monthly Payment</th>
            <th>Loan Lender</th>
            <th>Loan Interest Rate</th>
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
      </table>
    </div>
  );
};

export default AllEquipment;