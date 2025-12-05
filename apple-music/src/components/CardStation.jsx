import { Container, Row, Col, Card } from 'react-bootstrap';
import {images} from '../assets/images/'

const CardStation = function(props){
<>
  <Card className="border border-0 bg-transparent text-light">
    <Card.Body>
      <Card.Title className="fs-6 text-info ">NUOVA STAZIONE RADIO</Card.Title>
      <Card.Text className="fs-3">
        Rilassati, al resto pensiamo noi. Ascolta Apple Musica Chill
      </Card.Text>
    </Card.Body>
    <Card.Img className="round rounded-3" src={images} />
  </Card>
  ;
</>;
}

export default CardStation