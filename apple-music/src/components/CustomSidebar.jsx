import {Container, Nav, Navbar, NavbarCollapse, Form} from 'react-bootstrap';
import { BsApple, BsHouseDoor, BsGrid, BsBroadcast} from 'react-icons/bs'


const CustomSidebar = function () {
  return (
    <>
      <Navbar expand="lg" bg="dark-subtle" data-bs-theme="dark" className='d-none d-lg-flex vstack px-0'>
        <Container className='d-flex flex-lg-column'>
        <Navbar.Brand href="#home" className='fs-4'><BsApple className='fs-6 align-baseline'/>Music</Navbar.Brand>
        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" size='sm' rows={1} placeholder='Cerca' className='text-info' />
        </Form.Group>
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="d-flex flex-lg-column me-auto" >
              <Nav.Link href="#home " className='text-danger'><BsHouseDoor className='fs-6 text-danger align-middle m-1'/>Home</Nav.Link>
              <Nav.Link href="#novità" className='text-danger'><BsGrid className='fs-6 text-danger align-middle m-1'/>Novità</Nav.Link>
              <Nav.Link href="#radio" className='text-danger'><BsBroadcast className='fs-6 text-danger align-middle m-1'/>Radio</Nav.Link>
            </Nav>
          </NavbarCollapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-0' />
          <Navbar className="text fw-semibold text-danger d-lg-none">Accedi</Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomSidebar;