import './App.css';
import React, { Component } from 'react';

class AssetViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blockchainId: '',
      assets: null,
      error: null
    };
  }

  handleInputChange = (event) => {
    this.setState({ blockchainId: event.target.value });
  };

  handleButtonClick = () => {
    const url = `https://pdsapi.dase.io:8081/api/assets?ownerId=${this.state.blockchainId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ assets: data.assets, error: null });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div>
        <h2> Asset lookup</h2>
        <label htmlFor="blockchain-id">Blockchain ID:</label>
        <input id="blockchain-id" type="text" value={this.state.blockchainId} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>See Assets</button>
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.assets && (
          <table>
            <thead>
              <tr>
                <th>assetId</th>
                <th>ownerId</th>
                <th>assetContentType</th>
                <th>description</th>
                <th>custodians</th>
                <th>createdAt</th>
              </tr>
            </thead>
            <tbody>
              {this.state.assets.map((asset) => (
                <tr key={asset.assetId}>
                  <td>{asset.assetId}</td>
                  <td>{asset.ownerId}</td>
                  <td>{asset.assetContentType}</td>
                  <td>{asset.description}</td>
                  <td>{asset.custodians.join(', ')}</td>
                  <td>{asset.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default AssetViewer;
