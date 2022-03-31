import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { Nav, Navbar, NavDropdown, Button, Form, Table } from "react-bootstrap";
import truck from "../images/truck.jpg";



const Login = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = (event) =>{
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/users/login",
            {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            },
            )
            .then((res)=>{
                console.log(res, "res");
                console.log(res.data, "is res data!");
                navigate("/home");
            })
            .catch((err)=>{
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return(
        
        <div>
            <Navbar bg="black" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand >
            <img src={truck} width="50px" height="40px" />{' '}
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>

            <Nav>
            
            </Nav>

            </Navbar.Collapse>
        
        </Navbar>
            <h1>Login</h1>
            <p>{errorMessage ? errorMessage : ""}</p>
            <Form onSubmit={login}>
                <div>
                    <Form.Label>Email</Form.Label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Form.Label>Password</Form.Label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </Form>
        </div>
    );


};

export default Login;