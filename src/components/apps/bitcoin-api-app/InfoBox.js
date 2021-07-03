import React, { useState } from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
    display: inline-block;
    width: 50%;
    margin-bottom: 1em;
    text-align: center;
    color: #d9514e;
`;

const InfoBox = (props) => {
    const [payout, setPayout] = useState([]);
    const [infoCurrent, setInfoCurrent] = useState('');
    const [infoPayout, setInfoPayout] = useState('');
    
    useEffect(() => {
    const infoData = props.data;
    let payout = []
    for (let thing in infoData) {
    payout.push(infoData[thing])
    }
    setPayout(payout);
    setInfoCurrent(payout[30]);
    setInfoPayout(payout[30] - payout[0])
    }, [])

    return (
        <div>
            <InfoCard>
                <div>
                    <h3>Current Price:</h3>
                </div>
                <div>
                    <h5>{infoCurrent.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                    </h5>
                </div>
                </InfoCard>
                <InfoCard>
                <div>
                    <h3>Change Since Last Month (USD):
                    </h3>
                </div>
                <div>
                    <h5>infoPayout.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                    </h5>
                </div>
            </InfoCard>
        </div>
    );
};

export default InfoBox;