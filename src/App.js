import React, { Component } from 'react';
import PadDetails from './components/PadDetails';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div style={{ fontSize: "26px", color: '#222', textAlign: 'center', margin: 'auto' }}>
        <Header />
        <div style={{width: 'fit-content', margin: '0 auto', textAlign: 'center'}}>
          <PadDetails />
        </div>
      </div>
    );
  }
}

export default App;