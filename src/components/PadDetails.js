import React, { Component } from 'react';
import HeatMap from "react-heatmap-grid";
import firebase from '../config/firebaseConfig';

const xLabels = [1, 2, 3, 4, 5];

const yLabels = ['A', 'B', 'C', 'D', 'E'];

class PadDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [[0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 0, 0, 0, 0]]
        }
    }

    componentDidMount() {
        const wordRef = firebase.database().ref('Data');
        console.log(wordRef);
        /*wordRef.on('value', (snapshot) => {
            let dataTemp = snapshot.val();
            console.log(dataTemp);
            let update = [];
            for (let tmp in dataTemp) {
                update.push(tmp);
            }

            let df = [];

            for (let i in update) {
                df.push(dataTemp[update[i]]);
                console.log(dataTemp[update[i]]);
            }
            console.log(update);
            this.setState({ data: df });
        })*/
    }

    render() {
        return (
            <React.Fragment>
                <div style={{width: 'fit-content', fontSize: "30px", color: '#222', background: '#fff',margin: 'auto', marginTop: 20}}>
                    <HeatMap
                        height={100}
                        xLabels={xLabels}
                        yLabels={yLabels}
                        xLabelsLocation={"bottom"}
                        xLabelWidth={60}
                        data={this.state.data}
                        squares
                        onClick={(x, y) => console.log(`Clicked ${x}, ${y}`)}
                        cellStyle={(background, value, min, max, data, x, y) => ({
                            background: `rgb(76,175,80,${1 - (max - value) / (max - min)})`,
                            fontSize: "40px",
                            color: "#000"
                        })}
                        cellRender={value => value && `${value}`}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default PadDetails;