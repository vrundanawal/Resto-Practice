import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faTrash, faList, faHome, faPlus, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#action1"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                            <Nav.Link href="#action2"><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                            <Nav.Link href="#action2"><Link to="/create"><FontAwesomeIcon icon={faPlus} />  Create</Link></Nav.Link>
                            <Nav.Link href="#action2"><Link to="/search"><FontAwesomeIcon icon={faSearch} />  Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#action2"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#action2"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></Nav.Link>
                            }
                            {/* <Nav.Link href="#action2"><Link to="/details"><FontAwesomeIcon icon = {faInfoCircle} /> Details</Link></Nav.Link> */}
                            {/* <Nav.Link href="#action2"><Link to="/update">Update</Link></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarMenu;