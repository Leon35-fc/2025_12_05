import { Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const Other = function () {
  return (
    <>
        <h4 className='text-light'> Altro da esplorare </h4>
        <Row className='flex-lg-wrap justify-content-between mb-3'> 
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Esplora per genere </p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Decenni </p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Attività e stati d'animo</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Worldwide </p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Classiche</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Audio spaziale</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Video musicali</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Nuovi artisti</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
            <Col xs={12} lg={3}className='bg-info rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1'>
                <p className='text-danger m-0 p-2'>Hit del passato </p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>
        </Row>
    </>
  );
};

export default Other;
