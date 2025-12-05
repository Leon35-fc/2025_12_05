// import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import News from './components/News';
import Footer from './components/Footer';
import Player from './components/Player';

function App() {
  return (
    <>
      <Container fluid="true" className="p-0 w-100">
        <Row fluid="true">
          <Col xs={12} lg={3}>
            <CustomNavbar />
          </Col>
          <Col xs={12} lg={9} className="px-5">
            <News />
          </Col>
          <Col xs={12}>
            <Player/>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
