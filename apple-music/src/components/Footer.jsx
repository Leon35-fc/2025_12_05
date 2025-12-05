import { Container, Row, Col } from 'react-bootstrap';

const Footer = function () {
  return (
    <>
      <footer>
        <Container className='text-light fs-6 p-3'>
          <Row>
              <p>
                Italia | English UK
              </p>
          </Row>
          <Row>
            <p>Copyright &copy; 2024 Apple Inc. Tutti i diritti riservati.</p>
          </Row>
          <Row className='flex-wrap '>
            <Col xs={5}><p>Condizioni del servizio internet</p></Col>
            <Col xs={5}><p>Apple Music e privacy</p></Col>
            <Col xs={5}><p>Avviso sui coockie</p></Col>
            <Col xs={5}><p>Supporto</p></Col>
            <Col xs={5}><p>Feedback</p></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
