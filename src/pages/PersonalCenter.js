import { Container, Row, Col,Card ,Button} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';



import {Avatar} from '../components/Image'
import { RequireLogin } from '../components/Login';
import { useUserContext } from '../context/UserContext';
import config from '../config';

function PersonalCenter(){
  return (
    <div>
      <RequireLogin
      logined={<PersonalCenterUI/>}
      notlogin={
        <p>还未登陆，请先登陆</p>
        
      }
      />
    </div>
  )
}

export default PersonalCenter;

function PersonalCenterUI(){
  const [userManager,state] = useUserContext();
  return(
  <Card>
    <Tabs
      defaultActiveKey="profile"
      className="my-3 mx-3"
    >
      <Tab className="my-3 mx-3"  eventKey="profile" title="个人资料">
        <Container>
          <Row>
            <Col className='col-2 my-3 mx-3'>
              <Avatar src={state.avatar}/>
            </Col>
            <Col>
              <Row><h2>{state.name}</h2></Row>
              <Row><p>id:{state.id}</p></Row>
            </Col>
          </Row>
            
          <Row>
            <p>所在组织：{state.group_name}</p>
            <p>担任职务：{state.job}</p>
          </Row>
        </Container>
      </Tab>
      <Tab className="my-3 mx-3" eventKey="settings" title="设置">
        <Container>
          <ListGroup>
            <ListGroup.Item>
            Dapibus
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Container>
      </Tab>
    </Tabs>
  </Card>
  )
}


