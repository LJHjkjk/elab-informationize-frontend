import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useState } from 'react';

function useConfrimDialog(props){
    const [show,setShow]=useState(false)
    const ConfirmDialog=<ConfirmDialogC
                        show={show}
                        setShow={setShow}
                        {...props}
                        />
    return [setShow,ConfirmDialog]
}


//确认对话框
function ConfirmDialogC({show,setShow,title,message,yes='是',no='否',selected,is_static=false}){
    if (is_static){
        var backdrop='static'
        var closeButton=false
        var onHide=null
    }else{
        var backdrop=true
        var closeButton=true
        var onHide=()=>setShow(false)
    }
    return (
        <Modal show={show} backdrop={backdrop} onHide={onHide}>
            <Modal.Header closeButton={closeButton}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <Button onClick={()=>{
                                            selected(true)
                                            setShow(false)
                                        }}>
                            {yes}</Button>
                        </Col>
                        <Col>
                            <Button 
                                onClick={()=>{
                                            selected(false)
                                            setShow(false)
                                        }}
                                variant='danger'>
                            {no}</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
    )
}


export default useConfrimDialog
