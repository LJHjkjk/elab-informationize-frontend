import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { RequireLogin } from '../Login';
import { useUserContext } from '../../context/UserContext';
import { Col, Row } from 'react-bootstrap';
import { Avatar } from '../Image';
import config from '../../config';
import { HorizontalPlaceholder,VerticalPlaceholder } from '../Placeholder';
import { Link } from 'react-router-dom';

function NavbarElab() {
  const [userManager,state]=useUserContext();


  return (
  <Navbar className="bg-secondary">
    <Container>
      <Navbar.Brand href="/personal-center" >
        <Row>
          <Col>
          <img
            alt=""
            src="/favicon.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
          </Col>
          <Col style={{ display:'grid',placeItems:'center'}}>
            ELAB
          </Col>
        </Row>
      </Navbar.Brand>
      <Nav className="ml-auto" style={{ display:'grid',placeItems:'center'}}>
        <RequireLogin
        logined={
            <div >
              <Link to={'/personal-center'} >
                <Avatar src={state.avatar} size={50}/>
              </Link>
            </div>
        }
        notlogin={
          <a href={config['API']['AUTH_API']['login']}>登陆</a> 
        }
        />
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavbarElab;


