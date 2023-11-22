import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { RequireLogin } from '../Login';
import { useUserContext } from '../../context/UserContext';
import { Col, Row } from 'react-bootstrap';
import { Avatar } from '../Image';
import config from '../../config';

function NavbarElab() {
  const {user,dispatch}=useUserContext();


  return (
  <Navbar className="bg-secondary">
    <Container  >
      <Navbar.Brand href="/page" >
        <img
          alt=""
          src="/img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        ELAB
      </Navbar.Brand>
      <Nav className="ml-auto">
        <RequireLogin
        logined={
          <div>
            <Avatar url=''/>
            <p>{user.info.name}</p>
          </div>
        }
        notlogin={
          <a href={config['API_URL']['AUTH_API']['login']}>登陆</a> 
        }
        />
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavbarElab;


