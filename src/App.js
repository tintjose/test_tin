import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import MainArea from './component/MainArea';
import Header from './component/Header';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Header />
      <MainArea />
      </div>
    );
  }
}
export default App;
