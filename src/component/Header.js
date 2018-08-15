import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand>Stackline </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      </div>
    );
  }
}
export default Header;
