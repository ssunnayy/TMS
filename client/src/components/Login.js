import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { Nav, Navbar, NavDropdown, Button, Form, Table, Stack, Container } from "react-bootstrap";
import truck from "../images/truck.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';



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
            <h1 className='log'>Login</h1>
            <p>{errorMessage ? errorMessage : ""}</p>
            <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
            <Form onSubmit={login}>
                
                    <Form.Group className="mb-3" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"/>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"/>                    
                    </Form.Group>
                    <Button type="submit" variant="info">Sign In</Button>{' '}
                
            </Form>
            </Stack>
            </Container>
            

        </div>
    );


};

export default Login;