import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantDetail extends Component {
    render() {
        return (
            <div className="mt-5">
                 <NavBarMenu/>
                <h1>Restaurant Details </h1>
                
            </div>
        );
    }
}

export default RestaurantDetail;