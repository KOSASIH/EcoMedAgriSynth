import React, { useState, useEffect } from 'eact';
import axios from 'axios';
import Web3 from 'web3';

function DataIntegrationLayer() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.example.com/data')
    .then(response => {
        setData(response.data);
      })
    .catch(error => {
        console.error(error);
      });
  }, []);

  const blockchain = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

  const contract = new blockchain.eth.Contract(YOUR_CONTRACT_ABI, YOUR_CONTRACT_ADDRESS);

  const sendDataToBlockchain = async () => {
    try {
      const txCount = await blockchain.eth.getTransactionCount();
      const tx = {
        from: YOUR_WALLET_ADDRESS,
        to: YOUR_CONTRACT_ADDRESS,
        value: '0',
        gas: '20000',
        gasPrice: '20',
        data: contract.methods.sendData(data).encodeABI(),
      };
      const signedTx = await blockchain.eth.accounts.signTransaction(tx, YOUR_WALLET_PRIVATE_KEY);
      const receipt = await blockchain.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log(`Transaction receipt: ${receipt.transactionHash}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Data Integration Layer</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <button onClick={sendDataToBlockchain}>Send data to blockchain</button>
    </div>
  );
}

export default DataIntegrationLayer;
