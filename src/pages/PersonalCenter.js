import { Container, Row, Col,Card ,Button, Modal,Figure,Form} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';


import {Avatar,Photograph} from '../components/Image'
import { RequireLogin } from '../components/Login';
import { useUserContext } from '../context/UserContext';
import config from '../config';
import {HorizontalPlaceholder,VerticalPlaceholder} from '../components/Placeholder'
import ModifyPersonalInformationForm from '../form/ModifyPersonalInformation';
import usePopupContext from '../context/PopupContext';
import UploadFile from '../form/UploadFile';
import { useState } from 'react';

function PersonalCenter(){
  return (
    <div>
      <RequireLogin
      logined={<PersonalCenterRoute/>}
      notlogin={
        <p>还未登陆，请先登陆</p> 
      }
      />
    </div>
  )
}
export default PersonalCenter;



//个人中心设置
function PersonalCenterRoute(){
  return (    
      <Routes basePath='/personal-center' >
        <Route path='/' element={<PersonalCenterUI/>}/>
        <Route path='/modify/personal-info' element={<ModifyPersonalInformation />}/>
        <Route path='/modify/avatar' element={<ModifyAvatar/>}/>
      </Routes>
  )
}

//个人中心的界面
function PersonalCenterUI(){
  const [userManager,state] = useUserContext();
	const navigate = useNavigate();
  const popup=usePopupContext()
  
  function Logout(){
    //发送请求
    fetch(config['API']['AUTH_API']['logout'],{
      method:'GET',
      credentials:'include',
    })
    .then(response=>response.json())
    .then(result=>{
      if(result.result=='ok'){
        userManager.clear()
        navigate('/')
      }else{
        popup('登出失败','失败')
      }
    })
    .catch(error=>{
      popup('网络错误','错误')
      console.error(error)
    })
  }

  return(
  <Card>
    <Tabs
      defaultActiveKey="profile"
      className="my-3 mx-3"
    >
      <Tab className="my-3 mx-3"  eventKey="profile" title="个人资料">
        <Container>
          <Row>
            <Col className='col-1'></Col>
            <Col className='col-2 my-3 mx-3'>
              <Avatar src={state.avatar} size={130}/>
            </Col>
            <Col>
              <Row><VerticalPlaceholder/></Row>
              <Row><h2>{state.name}</h2></Row>
              <Row><p>id:{state.id}</p></Row>
            </Col>
            <Col >
              <Row><VerticalPlaceholder height={3}/></Row>
              <Row><Link to='/personal-center/modify/avatar'>修改头像</Link></Row>
              <Row><Link to='/personal-center/modify/personal-info'>修改个人信息</Link></Row>
              <Row><a href={config['API']['AUTH_API']['logout']}>退出登录</a></Row>
            </Col>
          </Row>
          <Row><VerticalPlaceholder/></Row>
          <Row>
            <Card>
              <Card.Header>个人信息</Card.Header>
              <Card.Body>
              <Container className='my-3 mx-3'>
                <Col className='col-1'></Col>
                  <Col>
                    <Row><p>邮件：{state.email}</p></Row>
                    <Row><p>手机：{state.phone}</p></Row>
                    <Row><p>职务：{state.position}</p></Row>
                    <Row><p>所在部门：{state.department}</p></Row>
                    <Row><p>项目经历：{state.project_experience}</p></Row>
                    <Row><p>获奖经历：{state.award_winning_experience}</p></Row>
                  </Col>
              </Container>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  </Card>
  )
}

// 头像修改
function ModifyAvatar(){
  const [userManager,state] = useUserContext();
  const oldAvatar=state.avatar
  const [newAvatar,setNewAvatar]=useState(null)
  const popup=usePopupContext()
	const navigate = useNavigate();

  function submitAvatar(formData){
    fetch(config['API']['USER_API']['upload_avatar'],{
      method:'POST',
      body:formData,
      credentials:'include'
    })
    .then(response=>response.json())
    .then(result=>{
      if(result.result=='ok'){
        popup('上传成功','成功')
        userManager.updateUserInfo()
        navigate('/personal-center')
      }
      else{
        popup(result.message,'上传失败')
      }
    })
    .catch(error=>{
      popup('网络错误','上传失败')
      console.error(error)
    })
  }
  return (
  <Card>
    <Card.Header>
      <Card.Title>修改头像</Card.Title>
    </Card.Header>
    <Card.Body>
      <Container>
        <Row>
          <Col className='col-2'></Col>
          <Col className='col-2'>
            <Figure>
              <Figure.Image
                src={newAvatar}
                roundedCircle
                height={500}
                width={500}
              />
              <Figure.Caption className='text-center'>
                新头像
              </Figure.Caption>
            </Figure>

          </Col>
          <Col className='col-2'></Col>
          <Col className='col-2'>
            <Figure>
                <Figure.Image
                  src={oldAvatar}
                  roundedCircle
                  height={500}
                  width={500}
                />
                <Figure.Caption className='text-center'>
                  旧头像
                </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col className='col-2'></Col>
          <Col className='col-2'>
          <UploadFile
          describe={'上传图片'}
          name={'avatar'}
          types={['.jpg','.jpe','.jpeg','.png','.gif','.svg','.bmp']}
          submitForm={submitAvatar}
          onChangeFunction={(file)=>{
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                setNewAvatar(event.target.result);
              };
              reader.readAsDataURL(file);
            }
          }}
          />
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
  )
}


//修改个人中心
function ModifyPersonalInformation(){
  //上传图片的表单
  function submitPhotographForm(formData){
    fetch(config['API']['USER_API']['upload_photograph'],{
      method:'POST',
      body: formData,
      credentials: 'include'
    })
    .then(response=>response.json())
    .then(result=>{
      if(result.result=='ok'){
        popup('上传成功','成功')
        userManager.updateUserInfo()
        navigate('/personal-center/modify/personal-info')
      }
      else{
        popup(result.message,'上传失败')
      }
    })
    .catch(error=>{
      popup('网络错误','上传失败')
      console.error(error)
    })
  }
  

  const [userManager,state] = useUserContext();
	const navigate = useNavigate();
  const popup=usePopupContext()
  function submitForm(data){
    //提交表单数据
    fetch(config['API']['USER_API']['modify_user_info'],{
      method:'POST',
      credentials:'include',
      body: JSON.stringify(data),
			headers:{
				'Content-Type':'application/json'
      }	
    })
    .then(response=>response.json())
    .then(result=>{
      if(result.result=='ok'){
        popup('修改成功','成功')
        userManager.updateUserInfo()
        navigate('/personal-center')
      }
      else{
        popup(result.message,'修改失败')
      }
    })
    .catch(error=>{
      popup('网络错误','修改失败')
      console.error(error)
    })
  }
  
  return(
    <Card>
      <Card.Body>
        <Row>
          <Col className='col-3'><Photograph url={state.photograph}/></Col>
          <Col className='col-5'>
            {/* 上传个人照片 */}
            <VerticalPlaceholder height={3}/>
            <UploadFile
            name='photograph'
            describe={'上传个人照片：'}
            types={['.jpg','.jpe','.jpeg','.png','.gif','.svg','.bmp']}
            submitForm={submitPhotographForm}
            />
          </Col>
        </Row>
        <Row className='my-3'>
          <Col className='col-4'>
              <Form.Group >
                  <Form.Label>ID：</Form.Label>
                  <Form.Control  value={state.id}  readOnly disabled/>
              </Form.Group>
          </Col>
          <Col className='col-4'>
              <Form.Group >
                  <Form.Label>姓名：</Form.Label>
                  <Form.Control  value={state.name}  readOnly disabled/>
              </Form.Group>
          </Col>
        </Row>
        <Row className='my-3'>
            <Col className='col-4'>
                <Form.Group >
                    <Form.Label>所在部门：</Form.Label>
                    <Form.Control  value={state.department}  readOnly disabled/>
                </Form.Group>
            </Col>
            <Col className='col-4'>
                <Form.Group >
                    <Form.Label>职务：</Form.Label>
                    <Form.Control  value={state.position}  readOnly disabled/>
                </Form.Group>
            </Col>
        </Row>

        <Row className='my-4'>
            <hr/>
        </Row>
        {/* 修改个人信息表单 */}
        <ModifyPersonalInformationForm userInfo={state} submitFunction={submitForm}/>
      </Card.Body>
    </Card>
  )
}
