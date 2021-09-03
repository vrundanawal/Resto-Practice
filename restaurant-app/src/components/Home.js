import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class Home extends Component {
    render() {
        return (
            <div className="mt-5">
                <NavBarMenu/>
                <h1>Home Component</h1>
            </div>
        );
    }
}

export default Home;