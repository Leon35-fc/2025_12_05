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
  BsMusicNoteBeamed
} from 'react-icons/bs';
import { FaShuffle } from 'react-icons/fa6';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { useState } from 'react';

const PlayerMobile = function () {
  const [slider, setSliderValue] = useState(50);
  const [sliderPrev, setSliderPrevValue] = useState();
  const [mute, setMute] = useState(false);

    //Per memorizzare il valore dello slider quando varia
  const handleChange = function (e) {
    console.log(e.target.value);
    return setSliderValue(e.target.value);
  };

    //Per memorizzare e gestire lo stato di 'mute'
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
    //Il valore dello slider viene diviso per 34 e arrotondato, restituendo un numero intero da 0 a 3 che (a seconda del caso)
    // diventa una diversa icona del volume    
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
      <Container className="d-lg-none fixed-bottom text-info-emphasis bg-dark rounded rounded-3  mb-2">
        <Row className="row-cols-3 align-items-center m-1 py-2">
          <Col className='fs-5'>
            <span className='bg-dark px-2 py-1 rounded rounded-2 border border-1 border-dark-subtle' id='note-beam'><BsMusicNoteBeamed/></span>
          </Col>
          <Col className="d-flex flex-row align-items-center justify-content-center">
            {/* <button
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
            /> */}
          </Col>
          <Row className="row-cols-5 flex-row-reverse fs-5 g-0">
              {/* <FaShuffle /> */}
              {/* <BsFillRewindFill /> */}
              <BsFastForwardFill />
              <BsFillPlayFill style={{scale: '1.6'}}/>
              {/* <PiArrowsClockwiseBold /> */}
            </Row>
        </Row>
      </Container>
    </>
  );
};

export default PlayerMobile