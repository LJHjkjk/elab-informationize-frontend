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
			logined={<ToDoListUI/>}
			notlogin={
				<p>还未登陆，请先登陆</p>
			}
			/>
		</div>
	)
}

function ToDoListUI(){
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <ToDoListItem name='lllllllll' title='dddddddddd' id={100}/>
                        <ListGroup.Item  action>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                        <Table borderless>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                        <Table borderless> 
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                        <Table borderless>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <Link to='/'>
                                <th>dddd</th>
                                <th>dddd</th>
                                <th>dddd</th>
                                </Link>
                            </tr>
                            <tr>
                                <th>dddd</th>
                                <th>dddd</th>
                                <th>dddd</th>
                            </tr>
                            <tr>
                                <th>dddd</th>
                                <th>dddd</th>
                                <th>dddd</th>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}


function ToDoListItem({id,datetime,name,title}){
    const target_url='/to-do-list/'+String(id)
    const customFormat = DateTime.fromMillis(datetime).toFormat('yyyy-MM-dd HH:mm');

    return (
        <Link to={target_url} style={{ textDecoration: 'none' }}>
            <ListGroup.Item  > 
                <Table borderless>
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
