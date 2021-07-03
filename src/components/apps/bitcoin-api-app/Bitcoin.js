import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import InfoBox from './InfoBox';

const Bitcoin = () => {
    const [data, setData] = useState([]);
    const [fetchingData, setFetchingData] = useState(true);

useEffect(() => {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    fetch(url)
    .then(response => response.json())
    .then(bitcoinData => {
    console.log(bitcoinData.bpi);
    setData(bitcoinData.bpi);
    setFetchingData(false);
    })
    .catch(e => {
    console.log(e);
    })
}, [])

return (
    <div className='main'>
        <div className='mainDiv'>
            <h1>30 Day Bitcoin Price Chart</h1>
            {!fetchingData ? <InfoBox data={data} /> : null }
            {!fetchingData ? <LineChart data={data}/> : null }
        </div>
    </div>
    );
}

export default Bitcoin;