import React from 'react'
import { Container, Button, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Nav = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
        <Button disabled variant="secondary" size="lg">Balance: {amount}</Button>
      </Container>
      </Navbar>
    </div>
    
  )
}

export default Nav