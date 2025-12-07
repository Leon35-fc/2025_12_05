import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { BsFillPlayFill, BsFillRewindFill, BsFastForwardFill, BsApple, BsFillVolumeMuteFill, } from "react-icons/bs";
import {FaShuffle} from 'react-icons/fa6'
import { PiArrowsClockwiseBold } from "react-icons/pi";

const Player = function () {

const myValue = function (e){
  console.log(e.target.value);
  
}

// const volumeIcon = function() {
//   switch (a){
//     case 0:
//       return <BsFillVolumeMuteFill />;
//     case 1:
//       return 

//   }
// }

  return(
    <>
      <Container className="text-info-emphasis">
        <Row className="row-cols-5 align-items-center m-1">
          <Col>
            <Row className="row-cols-5 g-0">
              <FaShuffle />
              <BsFillRewindFill />
              <BsFillPlayFill />
              <BsFastForwardFill />
              <PiArrowsClockwiseBold />
            </Row>
          </Col>
          <Col className="flex-grow-1 bg-info text-light text-center p-2"><BsApple/></Col>
          <Col><Form.Range className="p-1" /></Col>
          <Col><Button className="btn btn-danger ">Accedi</Button></Col>
        </Row>
      </Container>
    </>
  )
}

export default Player