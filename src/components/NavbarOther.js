import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../img/logo.png';

function NavbarOther() {  
  return (  
    <>  
      <Navbar style={{width: '100%', height: '100px'}} collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container style={{height: '100%'}} fluid={true}>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse style={{height: '100%'}} id="responsive-navbar-nav">  
            <Nav style={{fontFamily: 'Rubik Mono One', fontSize: '20px', width: '100%', height: '100%'}} className="d-lg-flex align-items-center me-auto">  
              {/* HashLink fixes the lack of auto scrolling to sections in Link */}
              <HashLink style={{width: '100%', textDecoration: "none", color: "white"}} to="/#aboutus">ABOUT US</HashLink> 
              <Link style={{fontSize: '30px', width: '100%', height: "100%"}} to="/"><img style={{height: "100%"}} src={logo} alt="logo"></img></Link>
              <HashLink style={{width: '100%', textDecoration: "none", color: "white"}} to="/#contactus">CONTACT US</HashLink> 
            </Nav>
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  ); 
}  
export default NavbarOther;  