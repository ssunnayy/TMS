import { useEffect } from "react";
import axios from "axios";

const DisplayQuoteAnalysis = (props) => {
    const { id } = props;
    const { quote, setQuote } = props;
    
    
    

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/quote/${id}`)
            .then((response) => {
                console.log(response.data);
                setQuote(response.data);
            })
            .catch((err) => console.log(err.response));
    }, []);

    return (
        <div>
            <h1>Bid Analysis Dashboard</h1>
            <div>
            {quote.map((quote, index) => (
            <div key={index}>
                <div>
                <p>Total Distance: {quote.distance}</p>
                <p>Driver Pay per Mile: {quote.payPerMile}</p>
                <p>Total Driver's Pay: {quote.payPerMile * quote.distance}</p>
                <p>Average Fuel Cost per Gallon: {quote.fuelCost}</p>
                <p>Fuel Cost: {quote.distance * quote.fuelCost}</p>
                <p>Desired Profit Margin: {quote.profitMargin}</p>
                <p>15% Profit Margin:{(15/100)*quote.profitMargin}</p>
                <p>30% Profit Margin:{(30/100)*quote.profitMargin}</p>
                
            </div>
            
            </div>
            ))}
            </div>
        </div>
    );
};

export default DisplayQuoteAnalysis;