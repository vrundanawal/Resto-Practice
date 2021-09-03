import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './NavBarMenu';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getList()
    }
    getList()
    {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
               // console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    delete(id)
    {
        fetch(`http://localhost:3000/restaurant/${id}`,{
            method : 'DELETE',
        }).then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                alert("Restaurant has been Deleted successfully")
                this.getList()
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="mt-5">
                <NavBarMenu/>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} color="blue " />  </Link>
                                                    <span onClick = {() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" />  </span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div> :
                        <p>Please Wait......Its Loading</p>
                }
            </div>
        );
    }
}

export default RestaurantList;