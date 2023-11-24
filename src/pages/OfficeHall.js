import { Container, Row,Figure, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import {Routes,Route,Link,useParams} from 'react-router-dom';


import { DateTime } from 'luxon'

import { RequireLogin } from '../components/Login';
import { useUserContext } from '../context/UserContext';
import { Icon } from '../components/Image';
import config from '../config';


import reimbursement_apply_icon from './icons/reimbursement_apply.svg'
import research_assistant_apply_icon from './icons/research_assistant_apply_icon.svg'

import ResearchAssistantApply from '../components/Service/ResearchAssistantApply'
import ReimbursementApply from '../components/Service/ResearchAssistantApply'


function OfficeHall(){
    return(
        <Card>
            <OfficeHallRoute/>
        </Card>
    )
}


function OfficeHallRoute(){
    return(
        <Routes basePath='/office-hall'>
            <Route path='/' element={<ServiceItems/>}/>
            <Route path='/research-assistant-apply' element={<ResearchAssistantApply/>}/>
            <Route path='/reimbursement-apply' element={<ReimbursementApply/>}/>
        </Routes>
    )
}




function ServiceItems(){
    return(
        <>
            <Card.Header>
                ddd
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <ServiceItem 
                        icon={reimbursement_apply_icon} 
                        title='报销申请'
                         url='/office-hall/reimbursement-apply'/>
                        <ServiceItem 
                        icon={research_assistant_apply_icon} 
                        title='科研助手申请'
                         url='/office-hall/research-assistant-apply'/>
                    </Row>
                </Container>
            </Card.Body>
        </>
    )
}

function ServiceItem({icon,url,title}){
    return(
        <Col className='col-3 text-center' >
            <Link to={url}>
                <Figure>
                    <Figure.Image
                        width={36}
                        height={36}
                        src={icon}
                    />
                    <Figure.Caption>
                        {title}
                    </Figure.Caption>
                </Figure>
            </Link>
        </Col>
    )
}


export default OfficeHall