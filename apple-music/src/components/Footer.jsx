import { Container, Row, Col } from 'react-bootstrap';

const Footer = function () {

  const opt = [
    'Condizioni del servizio internet',
    'Apple Music e privacy',
    'Avviso sui coockie',
    'Supporto',
    'Feedback'
  ];

  return (
    <>
      <Container className="text-light fs-6 m-0 p-0 vstack">
        <footer className="me-4">
          <Row className="container-fluid">
            <Col xs={12}>
              <p>Italia | English UK</p>
            </Col>
            <Col xs={12}><p>Copyright &copy; 2024 Apple Inc. Tutti i diritti riservati.</p></Col>
            {opt.map((song, i) => {
              return (
                <Col xs={4} key={i}>{song}</Col>
              );
            })}
          </Row>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
