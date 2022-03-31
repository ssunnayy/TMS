import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Nav, Navbar, NavDropdown, Button, Form, Table } from "react-bootstrap";




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
        <h1>Register</h1>
        {confirmReg ? <h4 style={{color:"green"}}>{confirmReg}</h4> :null}
        <Form onSubmit={register}>
            <div>
                <Form.Label>
                    Username
                </Form.Label>
                {errors.username ? (
                    <span className="error-text">
                        {errors.username.message}
                    </span>
                ) : null}
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <Form.Label>
                    Email
                </Form.Label>
                {errors.email ? (
                    <span className="error-text">
                        {errors.email.message}
                    </span>
                ) : null}
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <Form.Label>
                    Password
                </Form.Label>
                {errors.password ? (
                    <span className="error-text">
                        {errors.password.message}
                    </span>
                ) : null}
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <Form.Label>
                    Confirm Password
                </Form.Label>
                {errors.confirmPassword ? (
                    <span className="error-text">
                        {errors.confirmPassword.message}
                    </span>
                ) : null}
                <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="center">
                <button>Register Me</button>
            </div>

        </Form>
    </div>
)


}

export default Register;