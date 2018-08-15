import React from 'react';
import ReactDOM from 'react-dom';
import { button, Nav, NavItem } from 'react-bootstrap';
import image from '../image/image.jpeg';
const imgstyle={
  margin:'10px',
  width:'100px',
  height:'100px'
};
class Side extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
<img src={image} style={imgstyle} />
      <br />
      <h1>Shark Ninja</h1>
        <button>Pantry</button>
        <button>Obsolete</button>
        <button>Blender</button>
        <br />
        <Nav>
          <NavItem eventKey={1} title="About">
          OVERVIEW
          </NavItem>
          <NavItem eventKey={2} title="Sales">
            SALES
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default Side;
