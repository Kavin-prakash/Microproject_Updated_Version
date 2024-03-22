import React from 'react';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import book from '../Images/book.avif'



const Mainpage = () => {

    const [theme, setTheme] = useState('light');

    function handleTogggledarkTheme() {
        setTheme(theme === 'light' ? 'dark' : 'dark')
    }
    
    function handleToggglelightTheme() {
        setTheme(theme === 'light' ? 'light' : 'light')
    }

     
    

    return (
        <>
            <div className='dashboard' data-theme={theme}>
                <div className="navbarcontainer  " >
                    <Navbar bg="dark" variant="dark" expand="md">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className="me-auto navitems">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href='/Register'><button className='btn btn-primary'>Register</button></Nav.Link>
                                <Nav.Link href='/Login'><button className='btn btn-success'>Login</button></Nav.Link>
                                <button className='btn btn-dark darkicon' onClick={handleTogggledarkTheme} >{<NightsStayOutlinedIcon />}</button>
                                <button className='btn btn-dark ' onClick={handleToggglelightTheme} >{<LightModeOutlinedIcon />}</button>
                            </Nav>
                            </Navbar.Collapse>
                            <Outlet />
                        </Container>
                    </Navbar>
                </div>
                <div className='card-container'>
                    <div class="row" >
                        <div class="col-sm-4 wrap" >
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wrap">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wrap">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={book}/>
                </div>
                
            </div>
            <>
                {/* <nav>
        <ul>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> */}
            </>
        </>
    )
}

export default Mainpage
