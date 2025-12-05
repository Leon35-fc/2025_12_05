import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../assets/images/2a.png';
import image2 from '../assets/images/2b.png';
import image3 from '../assets/images/2c.png';
import { FaChevronRight } from "react-icons/fa";
// import CardStation from './CardStation';

function NewStationEpisodes() {
  return (
    <>
      <Row className="pt-4">
        <h4 className='text-light'> Nuovi episodi Radio <FaChevronRight className='fs-5 align-middle'/></h4>
        <Col xs={4} className="p-0">
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Img className="round rounded-3 text-info" src={image1} />
              <Card.Text className="fs-6 text-info">
                Prologo con Abuelo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} className="p-0">
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Img className="round rounded-3 text-info" src={image2} />
              <Card.Text className="fs-6">The Wanderer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} className="p-0">
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Img className="round rounded-3 text-info" src={image3} />
              <Card.Text className="fs-6">
                Michael Bublè & Carly Pearce
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewStationEpisodes;
