import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useState } from 'react';

function useModalShow({title='',header=<></>,body=<></>,footer=<></>,props}){
  const [show,setShow] =useState(false)

  const ShowModaled=<ShowModal 
                    props={props}
                    show={show} 
                    setShow={setShow}
                    title={title}
                    header={header}
                    body={body}
                    footer={footer}/>

  return [setShow,ShowModaled]
}


function ShowModal({show,setShow,title,header,body,footer,props}){
    return(
        <Modal show={show} onHide={()=>setShow(false)} {...props}>     
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>{title}</Modal.Title>
          {header}
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

        <Modal.Footer>{footer}</Modal.Footer>
      </Modal>
    )
}

export default useModalShow






