import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'

function Navigationbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" ><Link style={{textDecoration:'none',color:'white'}} to='/home' >Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link style={{textDecoration:'none',color:'white'}} to='/features'>Features</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:'none',color:'white'}} to='/pricing'>Pricing</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar
