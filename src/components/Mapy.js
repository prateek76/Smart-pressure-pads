import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import CheckpointData from './CheckpointData'
class Mapy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [
                { lat: 25.4299, lng: 81.7712, label: "IIIT Allahabad" },
                { lat: 25.4453, lng: 81.8250, label: "Allahabad Jnc" },
                { lat: 25.4569, lng: 81.8490, label: "Allahabad Meuseum" }
            ]
        }
    }

    displayMarkers = () => {
        return this.state.places.map((place, index) => {
            return <Marker key={index} id={index} label={place.label}
                position={{
                    lat: place.lat,
                    lng: place.lng
                }}
                onClick={this.showData} />
        })
    }

    showData = () => {
        alert('data');
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ position: 'relative' }}>
                    <CheckpointData />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Map
                        google={this.props.google}
                        zoom={13}
                        style={mapStyles}
                        initialCenter={{ lat: 25.4371, lng: 81.8001 }}
                        fullscreenControl={false}
                        gestureHandling='none'
                        streetViewControl={false}
                    >

                        {this.displayMarkers()}
                    </Map>
                </div>


            </React.Fragment>
        );
    }
}

const mapStyles = {
    width: '95%',
    height: '600px',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBqfg38c73ZXuVN7VMZkOVCuK5cXqpupk8'
})(Mapy);