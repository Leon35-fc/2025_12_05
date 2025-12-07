import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  BsFillPlayFill,
  BsFillRewindFill,
  BsFastForwardFill,
  BsApple,
  BsFillVolumeMuteFill,
  BsFillVolumeOffFill,
  BsFillVolumeDownFill,
  BsFillVolumeUpFill,
  BsFillPersonFill
} from 'react-icons/bs';
import { FaShuffle } from 'react-icons/fa6';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { useState } from 'react';

const Player = function () {
  const [slider, setSliderValue] = useState(50);
  const [sliderPrev, setSliderPrevValue] = useState();
  const [mute, setMute] = useState(false);

  const handleChange = function (e) {
    console.log(e.target.value);
    return setSliderValue(e.target.value);
  };

  const handleMute = function (e) {
    console.log(e.target);
    const rangeSlider = document.querySelector('.form-range');
    console.log('Il rangeSlider', rangeSlider.value);
    if (mute && slider == 0) {
      console.log('Slider prima di cambio parametri', slider);

      setMute(false);
      setSliderValue(sliderPrev);
      rangeSlider.value = sliderPrev;
      console.log("I'm on", sliderPrev);
    } else {
      setSliderPrevValue(slider);
      setMute(true);
      setSliderValue(0);
      console.log("I'm mute ", sliderPrev);
    }
  };

  const volumeIcon = function (a) {
    a = Math.ceil(slider / 34);
    // console.log( 'A vale: ',a)
    switch (a) {
      case 0:
        return <BsFillVolumeMuteFill />;
      case 1:
        return <BsFillVolumeOffFill />;
      case 2:
        return <BsFillVolumeDownFill />;
      case 3:
        return <BsFillVolumeUpFill />;
    }
  };

  return (
    <>
      <Container className="text-info-emphasis">
        <Row className="row-cols-6 align-items-center m-1">
          <Col>
            <Row className="row-cols-5 g-0">
              <FaShuffle />
              <BsFillRewindFill />
              <BsFillPlayFill />
              <BsFastForwardFill />
              <PiArrowsClockwiseBold />
            </Row>
          </Col>
          <Col className="flex-grow-1 bg-info text-light text-center p-2">
            <BsApple />
          </Col>
          <Col className="d-flex flex-row align-items-center justify-content-center">
            <button
              className="bg-transparent border-0 fs-2 d-flex"
              onClick={handleMute}
            >
              {volumeIcon()}
            </button>
            <Form.Range
              className="form-range w-50 p-1"
              min="0"
              max="100"
              value={slider}
              onChange={handleChange}
              style={{ '--value': `${slider}%` }}
            />
          </Col>
          <Col>
            <Button className="btn btn-danger d-flex align-items-center fw-semibold px-3 ms-5">
              <BsFillPersonFill className="text-light fs-5 me-3" />
              Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Player;