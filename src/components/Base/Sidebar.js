
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Sidebar() {
  return (
    <div id='Sidebar' >
    <Card >
      <Card.Header>
        <Nav className="flex-column " variant="tabs" defaultActiveKey="/office-hall">
          <Nav.Item>
            <Nav.Link as={Link} to="/office-hall">办事大厅</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}  to="/to-do-list">代办事项</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/mail">邮件</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/personal-center">个人中心</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">关于</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        dwa
      </Card.Body>
    </Card>
    </div>
  );
}

export default Sidebar;