import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state = {
            name : null,
            email : null,
            address: null,
            rating : null,
            id : null
        }
    }

    componentDidMount()
    {
        fetch(`http://localhost:3000/restaurant/${this.props.match.params.id}`)
        .then((response)=> {
            response.json().then((result) => {
                //console.warn(result)
                this.setState({
                    id:result.id,
                    name : result.name,
                    email : result.email,
                    address : result.address,
                    rating : result.rating
                })
            })
        })
    }
    update()
    {
        fetch(`http://localhost:3000/restaurant/${this.state.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                alert("Restaurant has been Updated successfully")
            })
        })
    }
    render() {
        //console.warn(this.props.match.params.id)
        console.warn(this.state)
        return (
            <div>
                <h1>Restaurant Update</h1>
                <div>
                    <input type = "text" onChange = {(e) => {this.setState({name: e.target.value})}} placeholder = "Restaurant Name" value={this.state.name}/><br/><br/>
                    <input type = "email" onChange = {(e) => {this.setState({email: e.target.value})}} placeholder = "Restaurant Email" value={this.state.email}/><br/><br/>
                    <input type = "text" onChange = {(e) => {this.setState({rating: e.target.value})}} placeholder = "Restaurant Rating" value={this.state.rating}/><br/><br/>
                    <input type = "text" onChange = {(e) => {this.setState({address: e.target.value})}} placeholder = "Restaurant Address"value={this.state.address}/><br/><br/>
                    <button onClick = {() => {this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;