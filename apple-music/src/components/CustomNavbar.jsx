import {Container, Nav, Navbar, NavbarCollapse} from 'react-bootstrap';
import { BsApple} from 'react-icons/bs'

const CustomNavbar = function () {
  return (
    <>
      <Navbar expand="lg" bg="dark-subtle" data-bs-theme="dark" className='px-0'>
        <Container className=''>
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="d-flex flex-lg-column me-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#novità">Novità</Nav.Link>
              <Nav.Link href="#radio">Radio</Nav.Link>
            </Nav>
          </NavbarCollapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-0' />
          <Navbar.Brand href="#home" className='fs-4'><BsApple className='fs-6 align-baseline'/>Music</Navbar.Brand>
          <Navbar className="text fw-semibold text-danger">Accedi</Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
