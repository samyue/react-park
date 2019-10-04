import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <Navbar expand='md'>
        <NavbarBrand href='/'>React Todo List</NavbarBrand>
      </Navbar>
    </header>
  )
}

export default Header
