import { Container, Row,Figure, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { RequireLogin } from '../Login';


function SimpleApply({title,body,accept,is_multiple=false,applyFileURL,applyFileName='附件.zip'}){
    accept=accept.join(',')
    function handleSubmit(){

    }
    return(
        <Card>
            <Card.Title className='text-center my-4'>
                <b>{title}</b>
            </Card.Title>
            <Card.Body>
                <Container>
                    <Row className=''>
                        {body}
                    </Row>
                    <Row className='my-5'>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>上传申请：</Form.Label>
                                    <Form.Control type="file" accept={accept} 
                                    multiple={is_multiple}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    提交
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer>
                <a href={applyFileURL} download={applyFileName}>下载附件</a>
            </Card.Footer>
        </Card>
    )
}
export default SimpleApply