import React from "react";
import { useState } from "react";
import DisplayQuoteAnalysis from "../components/BidAnalysisDash";
import BidQuotation from "../components/BidQuotation";
import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";
import truck from "../images/truck.jpg";
const Quote = (props) => {
    const { id } = props;
    const [quote, setQuote] = useState([]);

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
            <Nav.Link href="/tms/dash">Dashboard</Nav.Link>
            
            
        </Nav>
            </Navbar.Collapse>

        </Navbar>
        
        <div>
            <BidQuotation
                id={id}
                quote={quote}
                setQuote={setQuote}
            />
            <DisplayQuoteAnalysis
                id={id}
                quote={quote}
                setQuote={quote}
            />
        </div>
        </div>
    );
};

export default Quote;