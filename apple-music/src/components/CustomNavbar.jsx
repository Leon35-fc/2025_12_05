import {Container, Nav, Navbar, NavbarCollapse, Form} from 'react-bootstrap';
import { BsApple, BsHouseDoor, BsGrid, BsBroadcast} from 'react-icons/bs'

const CustomNavbar = function () {
  return (
    <>
      <Navbar expand="lg" bg="dark-subtle" data-bs-theme="dark" className='align-items-start px-0'>
        <Container className='d-flex flex-lg-column'>
          <Form.Group className="d-none d-lg-flex order-lg-2 my-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="textarea" size='sm' rows={1} placeholder='Cerca' className='text-info'/>
          </Form.Group>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-0 ' />
          <Navbar.Brand href="#home" className='fs-4 order-lg-1'><BsApple className='fs-6 align-baseline'/>Music</Navbar.Brand>
          <Navbar className="text fw-semibold text-danger d-lg-none">Accedi</Navbar>
          <NavbarCollapse id="basic-navbar-nav" className='border border-0 order-lg-3'>
            <Nav className="d-flex flex-lg-column me-auto order-lg-1" >
              <Nav.Link href="#home " className='text-danger'><BsHouseDoor className='fs-6 text-danger align-middle m-1'/>Home</Nav.Link>
              <Nav.Link href="#novità" className='text-danger'><BsGrid className='fs-6 text-danger align-middle m-1'/>Novità</Nav.Link>
              <Nav.Link href="#radio" className='text-danger'><BsBroadcast className='fs-6 text-danger align-middle m-1'/>Radio</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
