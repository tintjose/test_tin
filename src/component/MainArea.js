import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';
import Chart from './Chart';
import Side from './Side';
class MainArea extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Container fluid>
      <Row>
            <Col xs="auto">
            <Side />
            </Col>

            <Col  xs="auto" >
            <Chart />
            </Col>
      </Row>

      </Container>
    );
  }
}
export default MainArea;
