import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


import Footer from './components/Base/Footer'
import Navbar from './components/Base/Nav'
import Sidebar from './components/Base/Sidebar'
import './app.css'

import PersonalCenter from './pages/PersonalCenter'
import { UserProvider, useUserContext } from './context/UserContext'
import Alert from 'react-bootstrap/Alert';

function App() {

  return (
    <div className="App">
      <UserProvider>
      <Container fluid>
        <Row>
          <LoginAlert/>
          <Navbar/>
        </Row>
        <Row className='my-4'>
          <Col className='col-3'>
            <Sidebar/>
          </Col>
          <Col className='col-1'></Col>
          <Col className='col-7'>
            <Routes>
              <Route path='/office-hall' element={<p>办事大厅 </p>} />
              <Route path='/to-do-list' element={<p>待办事项 </p>} />
              <Route path='/mail' element={<p>邮件 </p>} />
              <Route path='/personal-center' element={<PersonalCenter/>} />
              <Route path='/about' element={<p>关于</p>} />
            </Routes>
          </Col>
        </Row>
        <Row className='my-5'/>
        <Row>
          <Footer />
        </Row>
      </Container>
      </UserProvider>
    </div>
  );
}

export default App;


function LoginAlert(){
  const [show, setShow] = useState(true);
  const {user,dispatch}=useUserContext()

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <p>{user.login_state.login_message}</p>
      </Alert>
    );
  }
  return <div></div>;
}
