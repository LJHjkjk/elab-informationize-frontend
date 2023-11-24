import { Container, Row,Figure, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { RequireLogin } from '../Login';
import SimpleApply from './SimpleApply';



function ReimbursementApplyUI({applyFileURL}){
    return (
        <SimpleApply 
        title={'报销申请'}
        body={'这里放正文'}
        accept={['.docx','doc']}
        applyFileURL={applyFileURL}
        applyFileName={'报销申请文件.docx'}
        />
    )
}


function ReimbursementApply(){
    return(
        <RequireLogin
        notlogin={<p>请登陆</p>}
        logined={<ResearchAssistantApplyUI applyFileURL={"/path/to/download/file"}/>}
        />
    )
}

export default ReimbursementApplyUI