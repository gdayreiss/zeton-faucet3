import './App.css';
import React, { useState, useEffect } from 'react';

function CreateAccountButton(){
    const [data, setData] = useState('');

    const handleClick = () => {
        fetch(`https://pdsapi.dase.io:8081/api/users/create`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({})
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            setData(JSON.stringify(data,null,2));
        })
        .catch((error) => {
            console.error(error);
        })
    };
    return (
        <>
        <h2>Create Account</h2>
        <button onClick={handleClick}> Create new account </button>
        {data && (
            <div>
                <pre>{data}</pre>
            </div>
        )} 
        </>
    );
}

export default CreateAccountButton;