import React, { Component } from 'react';
import './App.css';
import BalanceChecker from './BalanceChecker';
import FormComponent from './FormComponent';
import RequestTable from './RequestTable';
import CreateAccountButton from './CreateAccountButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Żetonium Faucet </h1>
        <img src={require('./headerimage.jpg')} width="100" height="100" alt="header image" />
        <FormComponent
          endpoint="https://pdsapi.dase.io:8081/api/balances/transfer"
          buttonText="Fund PDSAPI"
          title="PDSAPI Faucet"
        />
        <FormComponent
          endpoint="https://beta.dase.io:8081/api/balances/transfer"
          buttonText="Fund Beta"
          title="Beta Faucet"
        />
        <CreateAccountButton />
        <h1>Faucet Balance</h1>
        <BalanceChecker />
        <RequestTable />
      </div>
    );
  }
}

export default App;