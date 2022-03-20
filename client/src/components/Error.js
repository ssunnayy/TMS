import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';


const Error = (props)=>{

    
    return(
        <div>
            <p>We're sorry, but we could not find the Equipment you are looking for. Would you like to add an Equipement?"</p>
            <Link to={"/tms/new"}>Add an Equipment</Link>
        </div>
    )
}

export default Error;