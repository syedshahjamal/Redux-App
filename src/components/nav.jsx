import React from 'react'
import { Container, Button, Navbar } from 'react-bootstrap'

const Nav = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
        <Button variant="secondary" size="lg">Balance:000</Button>
      </Container>
      </Navbar>
    </div>
    
  )
}

export default Nav