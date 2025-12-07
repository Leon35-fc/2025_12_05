import { Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const Other = function () {

    const options = [
        'Esplora per genere',
        'Decenni',
        'Attività e stati d\'animo',
        'Worldwide',
        'Classiche', 
        'Audio spaziale',
        'Video musicali',
        'Nuovi artisti',
        'Hit del passato']

  return (
    <>
        <h4 className='text-light'> Altro da esplorare </h4>
        <Row className='flex-lg-wrap justify-content-between mb-3'>
        {options.map((other, index) => {
            return(
            <Col xs={12} lg={3}className='bg-dark-subtle rounded-3 m-0 hstack justify-content-between mt-3 me-1 flex-grow-1' key={index}>
                <p className='text-danger m-0 p-2'>{other}</p>
                <FaChevronRight className='fs-5 align-middle'/>
            </Col>)})}
        </Row>
    </>
  );
};

export default Other;
