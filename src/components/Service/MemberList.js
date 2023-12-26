import React, { useEffect, useState } from 'react';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { DataGrid,GridToolbar,zhCN,useGridApiRef,gridClasses } from '@mui/x-data-grid';
import config from '../../config';
import usePopupContext from '../../context/PopupContext';

import useModalShow from '../../hook/useModalShow';
import { RequireLogin } from '../Login';
import { DateTime } from 'luxon';


function MemberListUI(){
    const [members,setMembers]=useState([])
    const popup=usePopupContext()

    //表格的列定义
    const columns = [
    { field: 'id', headerName: 'ID',width: 150},
    { field: 'name', headerName: '名字'},
    { field: 'gender', headerName: '性别'},
    { field: 'department', headerName: '部门'},
    { field: 'position', headerName: '职务'},
    { field: 'college', headerName: '学院'},
    { field: 'major', headerName: '专业'},
    { field: 'classname', headerName: '班级'},
    { field: 'time_of_enrollment', headerName: '入学年份'},
    { field: 'join_date', headerName: '加入科中时间',
        valueGetter: ({ value }) => value && new Date(value)},  
    { field: 'native_place', headerName: '籍贯'},
    { field: 'email', headerName: '邮箱',width: 150},
    { field: 'phone', headerName: '电话',width: 150},
    { field: 'award_winning_experience', headerName: '获奖经历'},
    { field: 'project_experience', headerName: '项目经历'},
    { field: 'photograph', headerName: '照片url',
    renderCell: (params) => {
        if(params.value)
            return<a href={params.value}>查看</a>
      }},
    ];
    //获取成员数据
    useEffect(()=>{
        fetch(config['API']['USER_API']['get_members'],{
            method:'GET',
			credentials: 'include',
        })
        .then(response => response.json())
		.then(result => {
            if (result.result=='ok'){
				setMembers(result.data)
			}  
			else{
				popup(result.message,'获取成员信息失败')
			}
		})
		.catch(error => { 
			console.error('Error:', error);
			popup('网络错误','错误')
		})
    },[])

    return(
         <Card>
            <Card.Header>
                <Card.Title className='text-center'>成员列表</Card.Title>
                    <Container>
                        <Row style={{ height: 700, width: '100%' }}>
                            <DataGrid
                                columns={columns}
                                rows={members}
                                loading={()=>{}}
                                localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
                                slots={{ toolbar: GridToolbar }}
                            />
                        </Row>
                    </Container>
            </Card.Header>
         </Card>
    )
}

function MemberList(){
    return(
        <RequireLogin
        notlogin={<p>请登陆</p>}
        logined={<MemberListUI/>}
        />
    )
}

export default MemberList