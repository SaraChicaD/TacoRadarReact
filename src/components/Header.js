import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class Header extends React.Component {
  render() {
    let brand = <a href='#'>Taco Radar</a>;
    return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
        </Nav>
      </Navbar>
    );
  }
}