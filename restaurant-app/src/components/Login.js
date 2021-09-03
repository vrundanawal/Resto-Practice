import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        console.warn(this.state)
        fetch(`http://localhost:3000/login?q=${this.state.name}`).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                localStorage.setItem("login", JSON.stringify(resp))
                if(resp.length > 0){
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("Plese check user name and password")
                }
            })
        })
    }
    render() {
        return (
            <div className="mt-5 py-3">
                <NavBarMenu/>
                <h3>Login Form</h3>
                <input type="text"
                    placeholder="Enter Name" name="user" onChange={(e) => this.setState({ name: e.target.value })} /><br /><br />
                <input type="password"
                    placeholder="Enter Password" name="password" onChange={(e) => this.setState({ password: e.target.value })} /><br /><br />
                <button onClick={() =>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;