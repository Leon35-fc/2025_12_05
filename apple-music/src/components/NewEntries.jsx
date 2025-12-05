import { Row, Col } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa";

const NewEntries = function () {
    return(
        <>
            <Row className="flex-wrap">
                <h4 className='text-light'> Nuovi episodi Radio <FaChevronRight className='fs-5 align-middle'/></h4>
                <Col></Col>
            </Row>
        </>
    )
}

export default NewEntries