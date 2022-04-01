import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../App.css";
import { Nav, Navbar, NavDropdown, Button, Form, Table, Stack, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const Register = (props) =>{

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) =>{
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data);
            setUser({
                username:"",
                email:"",
                password:"",
                confirmPassword:"",
            });
            setConfirmReg(
                "Thank you for Registering, you can now log in!",
            );
            setErrors({});
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })

    }



return(
    <div>
        <h1 className='reg'>Register</h1>
        {confirmReg ? <h4 style={{color:"green"}}>{confirmReg}</h4> :null}

        <Container>
        <Stack gap={3} className="col-md-5 mx-auto">
        <Form onSubmit={register}>
        <Form.Group className="mb-3" controlId="username">
                <Form.Label></Form.Label>
                {errors.username ? (
                    <span className="error-text">
                        {errors.username.message}
                    </span>
                ) : null}
                <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={(e) => handleChange(e)}
                    placeholder="Username"/>
                
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                </Form.Label>
                {errors.email ? (
                    <span className="error-text">
                        {errors.email.message}
                    </span>
                ) : null}
                <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                    placeholder="Email"/>
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="password">
                <Form.Label>  </Form.Label>
                {errors.password ? (
                    <span className="error-text">
                        {errors.password.message}
                    </span>
                ) : null}
                <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                    placeholder="Password"/>
                     </Form.Group>
        
   
                <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label></Form.Label>
                {errors.confirmPassword ? (
                    <span className="error-text">
                        {errors.confirmPassword.message}
                    </span>
                ) : null}
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) => handleChange(e)}
                    placeholder="Confirm Password"/>
                </Form.Group>
           
          
            <Button type="submit" variant="info">Register Me</Button>{' '}
          

        </Form>
        </Stack>
         </Container>
    </div>
)


}

export default Register;