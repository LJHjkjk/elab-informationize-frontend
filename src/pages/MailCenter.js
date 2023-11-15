import { Container, Row, Col,Card ,ToggleButton, ToggleButtonGroup, Table} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import {Routes,Route,Link,useParams} from 'react-router-dom';


import {Avatar} from '../components/Image'
import { RequireLogin } from '../components/Login';
import { useUserContext } from '../context/UserContext';
import config from '../config';

/*
功能需求：
1.查看邮件
2.发送邮件 
*/

//邮件中心页面
function MailCenter(){
    return (
      <div>
        <RequireLogin
        logined={<MailCenterRouter/>}
        notlogin={
          <p>还未登陆，请先登陆</p>
        }
        />
      </div>
    )
  }

export default MailCenter


//邮件中心路由设置
function MailCenterRouter(){

    return (    
			<Card>
				<Routes basePath='mail'>
					<Route path='/' element={<MailCenterTabs/>}/>
					<Route path='/mail-details/:id' element={<MailDetails/>}/>
				</Routes>
			</Card>
  )
}

//邮件中心的选项卡
function MailCenterTabs({}){
	//获取邮件信息
	return (
		<Tabs
				defaultActiveKey="home"
				className="my-3 mx-3"
			>
				<Tab className="my-3 mx-3"  eventKey="home" title="家">
					<Container>
						<Row>
							<Link to="/mail/mail-details/1">查看邮件1</Link>
						</Row>
					</Container>
				</Tab>
				<Tab className="my-3 mx-3"  eventKey="mailbox" title="收件箱">
					<Routes basePath='mail'>
						<Route path='/' element={<Mailbox page={1}/>}/>
						<Route path='/mailbox/:page_id' element={<Mailbox/>}/>
					</Routes>
				</Tab>
				<Tab className="my-3 mx-3" eventKey="send-mail" title="发送邮件">
					<Container>
						<Row>
						</Row>
					</Container>
				</Tab>
			</Tabs>
	)

}


//邮件详情页面
function MailDetails(){
	const { id } = useParams();

	return (
		<div><p>pppp</p><p>{id}</p></div>
		
	)
}

function Mailbox({page_id}){
	//获取页数
	let {page}=useParams()
	if (page==undefined)
		page=page_id
		
	//获取对应页数的数据


	//渲染邮件
	return(
		<Table striped bordered hover>
			<thead>
        <tr>
          <th>发件人</th>
          <th>主题</th>
          <th>概览</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
		</Table>
	)
}