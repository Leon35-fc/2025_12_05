import { Row, Col, Card } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa";
import image1 from '../assets/images/2a.png';
import image2 from '../assets/images/2b.png';
import image3 from '../assets/images/2c.png';

function NewStationEpisodes() {

  const images = [image1, image2, image3]

  return (
    <>
      <Row className="pt-4">
        <h4 className='text-light'> Nuovi episodi Radio <FaChevronRight className='fs-5 align-middle'/></h4>

        {images.map((img, i) => {
          return(
        <Col xs={4} className="p-0" key={i}>
          <Card className="border border-0 bg-transparent text-light">
            <Card.Body>
              <Card.Img className="round rounded-3 text-info" src={img} />
              <Card.Text className="fs-6 text-info">
                Prologo con Abuelo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

          )
        })}

        
      </Row>
    </>
  );
}

export default NewStationEpisodes;
