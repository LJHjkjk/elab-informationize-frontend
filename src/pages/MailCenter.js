import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState,useEffect } from 'react';
import {Routes,Route,Link,useParams,useNavigate} from 'react-router-dom';
import { DateTime } from 'luxon';

import { RequireLogin } from '../components/Login';
import SelectItems,{UserItem} from '../components/Search';
import config from '../config/index'
import SendMailForm from '../form/SendMail'
import usePopupContext from '../context/PopupContext';


//邮件中心页面,对外接口
function MailCenter(){
	return (
		<div>
			<RequireLogin
			logined={<MailCenterRoute/>}
			notlogin={
				<p>还未登陆，请先登陆</p>
			}
			/>
		</div>
	)
}

export default MailCenter


//邮件中心路由设置
function MailCenterRoute(){
	return (    
		<Card>
			<Routes basePath='mail' >
				<Route path='/' element={<MailCenterTabs/>}/>
				<Route path='/mail-details/:mail_id' element={<MailDetails/>}/>
			</Routes>
		</Card>
  )
}

//邮件中心的选项卡
function MailCenterTabs({}){
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
					<Route path='/' element={<Mailbox/>}/>
					<Route path='/mailbox' element={<Mailbox/>}/>
				</Routes>
			</Tab>
			<Tab className="my-3 mx-3" eventKey="send-mail" title="发送邮件">
				<SendMail/>
			</Tab>
		</Tabs>
	)
}


//邮件详情页面
function MailDetails(){
	const { mail_id } = useParams();
	const [mailDetails,setMailDetails]=useState('');
	const popup=usePopupContext()

	//获取信息
	useEffect(()=>{
		fetch(config['API']['MAIL_API']['get_mail_details']+`?mail_id=${mail_id}`,{
			method: 'GET',
			credentials: 'include',
		})
		.then(response => response.json())
		.then(result => {
			if (result.result=='ok'){
				setMailDetails(result.data)
			}else{
				popup(result.message,'获取信息失败')
			}
		})
		.catch(error=>{
			console.error('Error:', error);
			popup('网络错误','错误','information')
		})
	},[])

	function ShowDateTime({datetime}){
		datetime=DateTime.fromMillis(datetime)
		return<>{datetime.toFormat('yyyy-MM-dd HH:mm:ss')}</>
	}

	return (
		<Card>
			<Card.Header>
				<Container>
					<Row>ID:{mailDetails.mail_id}</Row>
					<Row className='text-center'><h4>{mailDetails.title}</h4></Row>
					<Row>
						<Col>{mailDetails!=''&&<ShowDateTime datetime={mailDetails.pubdate}/>}</Col>
						<Col className='d-flex justify-content-end'>发件人：{mailDetails.sender_name}</Col>
					</Row>
				</Container>
			</Card.Header>
			<Card.Body>
				<br></br>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{mailDetails.body}</p>
			</Card.Body>
		</Card>
	)
}


//收件箱
function Mailbox(){
	//总页数
	const [ pageNumber,setPageNumber]=useState(0)
	//现在的页数
	const [nowPage,setNowPage]=useState(0)
	//收件箱
	const [mailbox,setMailbox]=useState([])

	const popup=usePopupContext()

	//获取收件箱的数据
	useEffect(() => {
		fetch(config['API']['MAIL_API']['get_mailbox'], {
			method: 'GET',
			credentials: 'include',
		  })
		.then(response => response.json())
		.then(result => {
			if (result.result=='ok'){
				//处理邮件信息
				setMailbox(result.data)
				setPageNumber(Math.ceil(result.data.length/config['MAIL']['MAILBOX_SINGLE_PAGE_SIZE']))
				setNowPage(1)
			}
			else{
				popup(result.message,'获取收件箱失败','information')
			}
		})
		.catch(error => { 
			console.error('Error:', error);
			popup('网络错误','错误','information')
		});

	  }, []); 


	//渲染邮件项组件
	function MailItem({sender,title,pubdate,operation,is_new=false}){
		const customMaxWidthStyle = {
			maxWidth: '150px', 
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		};
		const dateTime = DateTime.fromMillis(pubdate);
		return (
			<tr>
				<th >
					{sender}
				</th>
				<th style={customMaxWidthStyle}>
					{title}
				</th>
				<th>
					{dateTime.toFormat('yyyy-MM-dd HH:mm:ss')}
				</th>
				<th>
					{operation}
					{is_new?<Badge pill bg="danger">新</Badge>:<></>}
				</th>
			</tr>
		)
	}	

	return(
		<Container>
			<Row>
				<Table striped bordered hover responsive >
					<thead>
						<tr>
							<th>发件人</th>
							<th>主题</th>
							<th>时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
					{mailbox.slice(
						(nowPage-1)*config['MAIL']['MAILBOX_SINGLE_PAGE_SIZE'], 
						nowPage==pageNumber?mailbox.length:nowPage*config['MAIL']['MAILBOX_SINGLE_PAGE_SIZE'])
						.map(
						(item) => (
						<MailItem 
						sender={item.sender_name}
						title={item.title}
						pubdate={item.pubdate}
						operation={<Link to={'/mail/mail-details/'+String(item.mail_id)}>查看</Link>}
						is_new={item.is_new}
						/>
						))}
					</tbody>
				</Table>
			</Row>
			<Row>
				<Col className='col-2'><a href=''  onClick={(event)=>{event.preventDefault();nowPage!=1&&setNowPage(nowPage-1)}}>上一页</a></Col>
				<Col className='col-2'><a href=''  onClick={(event)=>{event.preventDefault();nowPage!=pageNumber&&setNowPage(nowPage+1)}}>下一页</a></Col>
				<Col className="d-flex justify-content-end">
					第{nowPage}页/共{pageNumber}页
				</Col>
			</Row>
		</Container>
	)
}


//发送邮件选项卡
function SendMail(){
	const [show,setshow]=useState(false)
	const [receivers,setReceivers]=useState([])
	const [users,setUsers]=useState([])
	const navigate = useNavigate();

	const popup=usePopupContext()

	function finishedSelect(event,selectedItems){
		setReceivers([...selectedItems])
		setshow(false)
	}

	//获取可发送对象
	async function fetchSendableObjects() {
		try {
		  var response = await fetch(config['API']['MAIL_API']['sendable_object'], {
			credentials: 'include',
			method: 'GET',
		  });
		  const data = await response.json();
		  setUsers(data);
		  
		} catch (error) {
		  setUsers([]);
		  console.error(error);
		}
	}

	useEffect(() => {
		fetchSendableObjects();
	}, []);


	function submitForm(data){
		// 添加收件人
		data.receivers=[]
		for(var i in receivers){
			data.receivers.push(receivers[i].id)
		}
		console.log(data)
		//发送请求
		fetch(config['API']['MAIL_API']['send_mail'], {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		  })
			.then(response => response.json())
			.then(result => {
				if (result.result=='ok'){
					popup('发送成功！','成功','information')
					// //清空组件的状态
					// setReceivers([])
					// setUsers([])
					navigate('/')
				}
				else{
					popup(result.message,'发送失败','information')
				}
			})
			.catch(error => { 
			  console.error('Error:', error);
			  popup('发送失败！','失败','information')
			});
	}

	return(
		<Container>
			<SelectItems 
			items={users} 
			show={show} 
			ShowItem={UserItem} 
			close={()=>setshow(false)}
			finishedSelect={finishedSelect}
			preselected={receivers}
			/>
			<Row className='my-2'>
				<Col className='col-3'>
					<Button  onClick={()=>setshow(true)}>选择收件人</Button>
				</Col>
				<Col >
					{receivers.length==0?'没有选择收件人':'已选择'+ String(receivers.length) +'人'}
				</Col>
			</Row>
			<Row className='my-2'>
				<SendMailForm isReceivers={receivers.length==0} submitFunction={submitForm}/>
			</Row>
		</Container>
	)
}