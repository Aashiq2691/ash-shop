import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">AshShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"><i className="fas fa-shopping-cart"> Cart</i></Nav.Link>
                            <Nav.Link href="#link"><i className="fas fa-user"> Sign In</i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default header
