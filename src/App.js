import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


import Footer from './components/Base/Footer'
import Navbar from './components/Base/Nav'
import Sidebar from './components/Base/Sidebar'
import './app.css'

import PersonalCenter from './pages/PersonalCenter'
import MailCenter from './pages/MailCenter'
import ToDoList from './pages/ToDoList'
import OfficeHall from './pages/OfficeHall';
import About from './pages/About';

import { UserProvider, useUserContext } from './context/UserContext'
import Alert from 'react-bootstrap/Alert';
import { useEffect } from 'react';

import { Helmet } from 'react-helmet';


function App() {

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="App">
        <UserProvider>
          <Container fluid>
            <Row>
              <LoginAlert/>
              <Navbar/>
              <p></p>
            </Row>
            <Row className='my-4'>
              <Col className='col-2 mx-3'>
                <Sidebar/>
              </Col>
              <Col className='col-8 mx-5'>
                <Routes>
                  <Route path='/office-hall/*' element={<OfficeHall/>} />
                  <Route path='/to-do-list' element={<ToDoList/>} />
                  <Route path='/mail/*' element={<MailCenter/>} />
                  <Route path='/personal-center' element={<PersonalCenter/>} />
                  <Route path='/about' element={<About/>} />
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
    </>
  );
}

export default App;


function LoginAlert(){
  const [show, setShow] = useState(true);
    const [UserManager,state]= useUserContext();

  useEffect(() => {
    setShow(true); // 设置 show 为 true，确保每次用户信息变化时都显示 Alert
  }, [state]);
  return(
    <div>
      {show? 
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <p>{state.loginMessage}</p>
      </Alert>:<></>}
    </div>
  )
}
