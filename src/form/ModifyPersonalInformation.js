import { useForm ,Controller} from 'react-hook-form';
import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';

function ModifyPersonalInformationForm({submitFunction,userInfo}){
    const { handleSubmit, control} = useForm({
        defaultValues:{
            gender:userInfo.gender,
            college:userInfo.college,
            major:userInfo.major,
            classname:userInfo.classname,
            grade:userInfo.grade,
            join_date:userInfo.join_date,
            native_place:userInfo.native_place,
            reason_for_application:userInfo.reason_for_application,
            email:userInfo.email,
            phone:userInfo.phone,
        }
    });

    function onSubmit(data){
        submitFunction(data)
    };

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                {/* 可更改项目 */}
                <Row className='my-3'>
                    <Col className='col-4'>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>性别：</Form.Label>
                            <Form.Control  {...field} />
                        </Form.Group> }
                        />
                    </Col>
                    <Col className='col-4'>
                    <Controller
                        name="native_place"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>籍贯：</Form.Label>
                            <Form.Control  {...field} />
                        </Form.Group> }
                        />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col className='col-4'>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>邮箱：</Form.Label>
                            <Form.Control type="email" {...field} />
                        </Form.Group> }
                        />
                    </Col>
                    <Col className='col-4'>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>手机号：</Form.Label>
                            <Form.Control type='tel' {...field} />
                        </Form.Group> }
                        />
                    </Col>
                </Row>            
                <Row className='my-3'>
                    <Col className='col-4'>
                    <Controller
                        name="college"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>学院：</Form.Label>
                            <Form.Control  {...field} />
                        </Form.Group> }
                        />
                    </Col>
                    <Col className='col-4'>
                    <Controller
                        name="major"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>专业：</Form.Label>
                            <Form.Control  {...field} />
                        </Form.Group> }
                        />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col className='col-4'>
                    <Controller
                        name="classname"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>班级：</Form.Label>
                            <Form.Control  {...field} />
                        </Form.Group> }
                        />
                    </Col>
                    <Col className='col-4'>
                    <Controller
                        name="grade"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>年级：</Form.Label>
                            <Form.Control type='number'  {...field} />
                        </Form.Group> }
                        />              
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col className='col-4'>
                    <Controller
                        name="join_date"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>加入科中时间：</Form.Label>
                            <Form.Control type='date' {...field} />
                        </Form.Group> }
                        />
                    </Col>
                </Row> 
                <Row className='my-3'>
                    <Col className='col-6'>
                    <Controller
                        name="reason_for_application"
                        control={control}
                        render={({ field }) => 
                        <Form.Group >
                            <Form.Label>申请理由：</Form.Label>
                            <Form.Control as="textarea" rows={5} {...field}/>
                        </Form.Group> }
                        />
                    </Col>
                </Row>                

    
                <Button className='my-3' variant="primary" type="submit">提交</Button>
            </Container>
        </Form>
    )
}

export default ModifyPersonalInformationForm

