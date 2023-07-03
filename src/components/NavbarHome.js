import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarHome() {  
  return (  
    <>  
      <Navbar style={{width: '100%'}} collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container fluid={true}>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav style={{fontFamily: 'Rubik Mono One', fontSize: '20px', width: '100%'}} className="d-lg-flex align-items-center me-auto">  
              <Nav.Link style={{width: '100%'}} href="#aboutus">ABOUT US</Nav.Link> 
              <Link style={{fontSize: '30px', width: '100%', height: "100%", textDecoration: 'none', color: 'white'}} to="/catalogue">ORDER PIZZA FOR DELIVERY</Link>
              <Nav.Link style={{width: '100%'}} href="#contactus">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  ); 
}  
export default NavbarHome;  