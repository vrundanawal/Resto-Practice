import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state = {
            name : null,
            email : null,
            address: null,
            rating : null
        }
    }

    create(){
        fetch('http://localhost:3000/restaurant', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                alert("Restaurant has been added successfully")
            })
        })
    }
    render() {
        return ( 
            <div className="mt-5">
                <NavBarMenu/>
                <h1>Restaurant Create</h1>
                <div>
                    <input type = "text" onChange = {(e) => {this.setState({name: e.target.value})}} placeholder = "Reataurant Name"/><br/><br/>
                    <input type = "email" onChange = {(e) => {this.setState({email: e.target.value})}} placeholder = "Reataurant Email"/><br/><br/>
                    <input type = "text" onChange = {(e) => {this.setState({rating: e.target.value})}} placeholder = "Reataurant rating"/><br/><br/>
                    <input type = "text" onChange = {(e) => {this.setState({address: e.target.value})}} placeholder = "Reataurant Address"/><br/><br/>
                    <button onClick = {() => {this.create()}}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;