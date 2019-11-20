import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div class="container">
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ color: '#fff' }}><i>Rakshak</i></h1>
                </div>
                <ul>
                    <Link to="/"><li class="focused">Checkpoints</li></Link>
                    <Link to="/pad"><li>Mat</li></Link>
                    <Link to="/about"><li> About</li></Link>
                </ul>
            </div>
        );
    }
}

export default Header;