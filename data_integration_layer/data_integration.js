import React, { useState, useEffect } from 'eact';
import axios from 'axios';

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

  return (
    <div>
      <h1>Data Integration Layer</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default DataIntegrationLayer;
