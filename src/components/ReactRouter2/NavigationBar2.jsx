import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap/esm'
import { Link } from 'react-router-dom'

function NavigationBar2() {
  let text ={
    textDecoration:'none',
    color:'white'
  }
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link style={text} to='home'>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link style={text} to='about'>About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={text} to='careers'>Careers</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={text} to='internship'>Internship</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={text} to='placements'>Placements</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar2
