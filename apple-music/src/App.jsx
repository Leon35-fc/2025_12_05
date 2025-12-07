// import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import News from './components/News';
import Footer from './components/Footer';
import Player from './components/Player';
// import CustomSidebar from './components/CustomSidebar';

function App() {
  return (
    <>
      <Container fluid={true} className="p-0 w-100">
        <Row fluid="true" className='d-flex align-content-start'>
          <Col xs={12} lg={2} className=''>
            <CustomNavbar />
            {/* <CustomSidebar/> */}
          </Col>
          <Col xs={12} lg={10} fluid='true' className="p-0">
          <Container fluid={true} className='m-0 p-0'>
          <Row className='m-3'>
            <News />
          </Row> 
          <Row>
            <Footer />
          </Row>
          </Container>
          </Col>
          <Col xs={12}>
            <Player/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
