import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import {Routes,Route,Link,useParams} from 'react-router-dom';


import { DateTime } from 'luxon'

import { RequireLogin } from '../components/Login';
import { useUserContext } from '../context/UserContext';
import config from '../config';

function ToDoList(){
    return (
		<div>
			<RequireLogin
			logined={<ToDoListData/>}
			notlogin={
				<p>还未登陆，请先登陆</p>
			}
			/>
		</div>
	)
}


function ToDoListData(){
    //获取数据
    //处理数据
    //向下传递
    var group1={
        title:"报销申请",
        items:[{
            "name":'李佳浩',
            "datetime":123,
            "path":12,
            "title":"报销"
        }]
    } 
    var group2={
        title:"科研助手申请",
        items:[{
            "name":'llkkkj',
            "datetime":123,
            "path":12,
            "title":"dadw"
        },{
            "name":'llkkkj',
            "datetime":123,
            "path":12,
            "title":"dadw"
        },{
            "name":'llkkkj',
            "datetime":123,
            "path":12,
            "title":"dadw"
        },]
    }     
    var groups=[group1,group2]


    return (
        <Card>
            <Routes basePath='/to-do-list'>
                <Route path='/' element={<ToDoListUI groups={groups}/>}/>
                <Route path='/details/<:id>' element={<ToDoListDetails/>}/>
            </Routes>
        </Card>
    )
}


function ToDoListDetails(){
    //请求数据

    return

}

function ToDoListUI({groups}){
    return (
        <Container>
            <Row>
                <Accordion className='my-3'>
                    {groups.map((group, index) => (
                    <ToDoListGroup key={index} groupName={group.title} group={group} />
                    ))}
                </Accordion>
            </Row>
        </Container>
    )
}


function ToDoListGroup({groupName,group}){
    return(
        <Accordion.Item eventKey={groupName}>
            <Accordion.Header>{group.title}</Accordion.Header>
            <Accordion.Body>
                {group.items.map(item=>
                    <ToDoListItem 
                    datetime={item.datetime}
                    name={item.name}
                    title={item.title}
                    path={item.path}
                    />
                )}
            </Accordion.Body>
        </Accordion.Item>
    )
}

function ToDoListItem({path,datetime,name,title}){
    const target_url='/to-do-list/details/de'+String(path)
    const customFormat = DateTime.fromMillis(datetime).toFormat('yyyy-MM-dd HH:mm');

    return (
        <Link to={target_url} style={{ textDecoration: 'none' }}>
            <ListGroup.Item action > 
                <Table borderless >
                    <tbody>
                        <tr>
                            <td>{customFormat}</td>
                            <td>{name}</td>
                            <td>{title}</td>
                        </tr>
                    </tbody>
                </Table>
            </ListGroup.Item>
        </Link>
    )
}



export default ToDoList
