import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

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
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="distance">Distance</label>
                    <input 
                        type="text"
                        id="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fuelCost">Average Fuel Cost</label>
                    <input 
                        type="text"
                        id="fuelCost"
                        value={fuelCost}
                        onChange={(e) => setFuelCost(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="payPerMile">Driver Pay per Mile</label>
                    <input 
                        type="text"
                        id="payPerMile"
                        value={payPerMile}
                        onChange={(e) => setPayPerMile(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="miscCost">Miscellaneous</label>
                    <input 
                        type="text"
                        id="miscCost"
                        value={miscCost}
                        onChange={(e) => setMiscCost(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="profitMargin">Desired Profit Margin</label>
                    <input 
                        type="text"
                        id="profitMargin"
                        value={profitMargin}
                        onChange={(e) => setProfitMargin(e.target.value)}
                    />
                </div>

                <button type="submit">Calculate Cost/Benefit</button>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
            </form>

        </div>
    );
};

export default BidQuotation;
