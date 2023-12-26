import { Container, Row,Figure, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import {Routes,Route,Link,useParams} from 'react-router-dom'


import reimbursement_apply_icon from './icons/reimbursement_apply.svg'
import research_assistant_apply_icon from './icons/research_assistant_apply_icon.svg'
import elab_calendar_icon from './icons/elab_calendar_icon.svg'
import award_apply_icon from './icons/award_apply_icon.svg'
import score_inquiry_icon from './icons/score_inquiry_icon.svg'
import material_management_system_icon from './icons/material_management_system_icon.svg'
import member_list_icon from './icons/member_list_icon.svg'

import ResearchAssistantApply from '../components/Service/ResearchAssistantApply'
import ReimbursementApply from '../components/Service/ResearchAssistantApply'
import ElabCalendar from '../components/Service/ElabCalendar';
import MaterialManagementSystem from '../components/Service/MaterialManagementSystem';
import MemberList from '../components/Service/MemberList';

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
            <Route path='/elab-calendar' element={<ElabCalendar/>}/>
            <Route path='/material-management-system' element={<MaterialManagementSystem/>}/>
            <Route path='/member-list' element={<MemberList/>}/>
        </Routes>
    )
}




function ServiceItems(){
    return(
        <div>
            <Card.Header>
                服务
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row className='my-5'>
                        <ServiceItem 
                        icon={reimbursement_apply_icon} 
                        title='报销申请'
                        url='/office-hall/reimbursement-apply'/>
                        <ServiceItem 
                        icon={research_assistant_apply_icon} 
                        title='科研助手申请'
                        url='/office-hall/research-assistant-apply'/>
                        <ServiceItem
                        icon={elab_calendar_icon}
                        title='科中日历'
                        url='/office-hall/elab-calendar'/>
                        <ServiceItem
                        icon={award_apply_icon}
                        title='获奖申请'                
                        url=''/>
                    </Row>
                    <Row className='my-5'>
                        <ServiceItem 
                        icon={score_inquiry_icon} 
                        title='成绩查询'
                        url=''/>
                        <ServiceItem 
                        icon={material_management_system_icon} 
                        title='物料管理系统'
                        url='/office-hall/material-management-system'/>                        
                        <ServiceItem 
                        icon={member_list_icon} 
                        title='成员列表'
                        url='/office-hall/member-list'/>
                    </Row>
                </Container>
            </Card.Body>
        </div>
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