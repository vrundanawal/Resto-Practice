import React, { Component } from 'react';
import { Form, Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch : ""
        }
    }
    search(key) {
        console.warn(key)
        this.setState({lastSearch : key})
        fetch(`http://localhost:3000/restaurant?q=${key}`).then((response) => {
            response.json().then((result) => {
                console.warn("result", result)
                if (result.length > 0) {
                    this.setState({ searchData: result, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
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
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <Container className="mt-5">
                <NavBarMenu/>
                <h1>Restaurant Search</h1>
                
                <Form.Control type="text" onChange={(e) => this.search(e.target.value)} placeholder = "Search Restaurant"/>
                <div>
                    {
                        this.state.searchData ?
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
                                            this.state.searchData.map((item, i) =>
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.rating}</td>
                                                    <td>{item.address}</td>
                                                    <td>
                                                        <Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} color="blue " />  </Link>
                                                        <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" />  </span>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            : ""
                    }
                    {
                        this.state.noData ? <h4>No record Found</h4> : null
                    }
                </div>
            </Container>
        );
    }
}

export default RestaurantSearch;