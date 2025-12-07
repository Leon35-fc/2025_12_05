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
      <Container className="fs-6 display-6 fw-normal text-info m-0 p-0 vstack">
        <footer className="me-4 px-4 py-3">
          <Row className="container-fluid">
            <Col xs={12}>
              <p><span className='text-light'>Italia</span> | English UK</p>
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
