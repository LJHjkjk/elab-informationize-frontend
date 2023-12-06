import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';
import { useState,useContext,createContext } from 'react';


//创建弹窗上下文
const PopupContext = createContext();

function PopupProvider({ children }){
    const [show,setShow]=useState(false)
    const [content,setContent]=useState({
        type:'bg-information',
        message:'',
        title:'通知'
    })

    function popup(message,title='提示',type='information'){
        type='bg-'+type
        setContent({
            type:type,
            message:message,
            title:title,
        })
        setShow(true)
    }

    return(
        <PopupContext.Provider value={popup}>
            <Modal
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            onHide={()=>setShow(false)}
            centered
            >
                <Modal.Header className={content.type} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {content.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={content.type}>
                    {content.message}
                </Modal.Body>
            </Modal>
            {children}
        </PopupContext.Provider>
    )
}

function usePopupContext(){
    const popup = useContext(PopupContext);
    return popup
  };


export default usePopupContext
export {PopupProvider}
