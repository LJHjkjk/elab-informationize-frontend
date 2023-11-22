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
  const { user,dispatch } = useUserContext();
  console.log('dadd')
  return(
  <Card>
    <p>{user.name}</p>
    <Tabs
      defaultActiveKey="profile"
      className="my-3 mx-3"
    >
      <Tab className="my-3 mx-3"  eventKey="profile" title="个人资料">
        <Container>
        <span class="material-symbols-outlined">
add_circle
</span><span class="material-symbols-outlined">
star
</span>
          <Row>
            <Col className='col-2 my-3 mx-3'>
              <Avatar url={user.info.avatar_url}/>
            </Col>
            <Col>
              <Row><h2>{user.name}</h2></Row>
              <Row><p>id:{user.id}</p></Row>
            </Col>
          </Row>
            
          <Row>
            <p>所在组织：{user.group_name}</p>
            <p>担任职务：{user.job}</p>
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


