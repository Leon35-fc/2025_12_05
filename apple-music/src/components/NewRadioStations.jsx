import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../assets/images/1a.png';
import image2 from '../assets/images/1b.png';
// import CardStation from './CardStation';

function NewRadioStations() {
  return (
    <>
      <Row>
        <Col xs={6}>
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Title className="fs-6 text-info-emphasis">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="fs-5 text-info">
                Rilassati, al resto pensiamo noi. Ascolta Apple Musica Chill
              </Card.Text>
            </Card.Body>
            <Card.Img className="round rounded-3 text-info" src={image1} />
          </Card>
        </Col>
        <Col xs={6}>
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Title className="fs-6 text-info-emphasis">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="fs-5">
                Rilassati, al resto pensiamo noi. Ascolta Apple Musica Chill
              </Card.Text>
            </Card.Body>
            <Card.Img className="round rounded-3 text-info" src={image2} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewRadioStations;
