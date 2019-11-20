import React, { Component } from 'react';
import CardCustom from './cards/CardCustom';
import CardCustom1 from './cards/cardCustom1';

class CheckpointData extends Component {
    render() {

        let data1 = {
            "checkpoint": "IIIT Allahabad",
            "Rate": "200",
            "cnt": "30k",
            "Status": "Go"
        }

        let data2 = {
            "checkpoint": "Allahabad station",
            "Rate": "250",
            "cnt": "80k",
            "Status": ""
        }

        let data3 = {
            "checkpoint": "Allahabad meuseum",
            "Rate": "300",
            "cnt": "70k",
            "Status": ""
        }

        let data4 = {
            "what": "Total count",
            "cnt": "180k",
        }

        let data5 = {
            "what": "Buisiest Gate: Ald stn",
            "cnt": "80k",
        }

        return (
            <div style={{display: 'grid'}}>
                <div style={{ display: 'inline-flex', margin: 'auto' }}>
                    <CardCustom1 data={data4} />
                    <CardCustom1 data={data5} />
                </div>
                <div style={{ display: 'inline-flex', margin: 'auto' }}>

                    <CardCustom data={data1} />
                    <CardCustom data={data2} />
                    <CardCustom data={data3} />
                </div>
            </div>
        );
    }
}

export default CheckpointData;