import { Container, Row,Figure, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { RequireLogin } from '../Login';

function ResearchAssistantApplyUI({applyFileDownloadURL}){
    return (
        <Card>
            <Card.Title className='text-center my-4'>
                <b>科研助手申请</b>
            </Card.Title>
            <Card.Body>
                <Container>
                    <Row className=''>
                        这里放正文
                    </Row>
                    <Row className='my-5'>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>上传申请：</Form.Label>
                                <Form.Control type="file" accept=".pdf,.doc,.docx"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer>
                <a href={applyFileDownloadURL} download="科研助手申请.word">下载申请文件</a>
            </Card.Footer>
        </Card>
    )
}


function ResearchAssistantApply(){
    return(
        <RequireLogin
        notlogin={<p>请登陆</p>}
        logined={<ResearchAssistantApplyUI applyFileDownloadURL={"/path/to/download/file"}/>}
        />
    )
}

export default ResearchAssistantApply