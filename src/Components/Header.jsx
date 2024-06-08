import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux';
import { searchRestaurantNeighborhood } from '../Redux/restaurantSlice';
import { Link } from 'react-router-dom';

function Header({ insideRestaurant }) {
    const dispatch = useDispatch()

    return (
        <>
            <Navbar expand="lg" className="bg-transparent  z-3 w-100">
                <Container className='ms-5'>
                    <Navbar.Brand>
                        <Link to={'/'}><img width={"28%"} src={logo} alt="LOGO" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {insideRestaurant && <Nav.Link>
                                <input onChange={e => dispatch(searchRestaurantNeighborhood(e.target.value.toLowerCase()))} style={{ width: "200px", color: "#000", backgroundColor: "wheat" }} type="text" className='me-4 rounded p-1 border-0 ' placeholder=" Search Here!!" />
                            </Nav.Link>}
                            <Nav.Link className='me-4 text-white fw-semibold'><Link className='text-decoration-none text-white' to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'><Link  className='text-decoration-none text-white' to={'/restaurants'}>Restaurants</Link></Nav.Link>
                            <Nav.Link className='me-0 text-white fw-semibold'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
