import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import { Nav, Navbar, NavDropdown, Button, Form, Container, Stack } from "react-bootstrap";

const BidQuotation = (props) => {
    const { quote, setQuote } = props;
    const [distance, setDistance] = useState("");
    const [fuelCost, setFuelCost] = useState("");
    const [payPerMile, setPayPerMile] = useState("");
    const [miscCost, setMiscCost] = useState("");
    const [profitMargin, setProfitMargin] = useState("");
    const [totalDriverCost, setTotalDriverCost] = useState();
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // setTotalDriverCost((distance*payPerMile))
        // console.log((distance*payPerMile))
        axios
            .post("http://localhost:8000/api/quote", {
                distance,
                fuelCost,
                payPerMile,
                miscCost,
                profitMargin,
            })
            .then((response) => {
                console.log("Success");
                console.log(response);
                setQuote([...quote, response.data]);
                setDistance("");
                setFuelCost("");
                setPayPerMile("");
                setMiscCost("");
                setProfitMargin("");
                // setTotalDriverCost((distance*payPerMile))
                // console.log((totalDriverCost))
                setId(response.data._id);
                console.log(response.data._id);
                navigate("/api/quote");
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.response.data.err);
            });
    };

    return (
        <div>
          
            <h1>Bid Quotation</h1>
            <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
            <Form onSubmit={(e) => handleSubmit(e)}>

            <Form.Group className="mb-3" controlId="distance">
                <Form.Label></Form.Label>
                <Form.Control 
                        type="number"
                        id="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    placeholder="Distance"/>
                </Form.Group>



                <Form.Group className="mb-3" controlId="fuelcost">
                <Form.Label></Form.Label>
                <Form.Control 
                        type="number"
                        id="fuelCost"
                        value={fuelCost}
                        onChange={(e) => setFuelCost(e.target.value)}
                        placeholder="Fuel Cost/Per Gallon"/>
                        </Form.Group>
                
                
                
                        <Form.Group className="mb-3" controlId="payperfmile">
                <Form.Label></Form.Label>
                <Form.Control 
                        type="number"
                        id="payPerMile"
                        value={payPerMile}
                        onChange={(e) => setPayPerMile(e.target.value)}
                        placeholder="Drivers Pay Per Mile"/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="misccost">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        type="number"
                        id="miscCost"
                        value={miscCost}
                        onChange={(e) => setMiscCost(e.target.value)}
                        placeholder="Misc Cost"/>
                        </Form.Group>
                
                
                        <Form.Group className="mb-3" controlId="profitmargin">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        type="number"
                        id="profitMargin"
                        value={profitMargin}
                        onChange={(e) => setProfitMargin(e.target.value)}
                        placeholder="Profit Margin"/>
                        </Form.Group>

                <Button type="submit" variant="info">Calculate Cost/Benefit</Button>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                </Form>
            </Stack>
            </Container>

        </div>
    );
};

export default BidQuotation;
