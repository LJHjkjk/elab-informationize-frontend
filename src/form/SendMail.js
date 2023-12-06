import { useForm ,Controller} from 'react-hook-form';
import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';


function SendMailForm({isReceivers,submitFunction}){
    const { handleSubmit, control,setValue,formState: { errors }} = useForm();

    function onSubmit(data){
        submitFunction(data)
    };

    return(
        <Form onSubmit={handleSubmit(onSubmit)} >
            {/* 收件人  */}
            <Controller
                name="receivers"
                control={control}
                defaultValue={''} 
                render={({ field }) => <Form.Control type='hidden' {...field} />}
                />
             <p style={{ color: 'red' }}>{isReceivers && errors.receivers && "请选择至少一个收件人"}</p>
            {/*  主题 */}
            <Form.Group controlId="title">
                <FloatingLabel
                    label="主题"
                    className="mb-3"
                >
                <Controller
                name="title"
                control={control}
                defaultValue={''}
                rules={{ required: true }}
                render={({ field }) => 
                <Form.Control  placeholder='主题' {...field}/>}
              />
              <p style={{ color: 'red' }}>{errors.title && "请输入主题"}</p>
                </FloatingLabel>
            </Form.Group>
            {/* 正文 */}

            <Form.Group controlId="body">
                <Form.Label>正文</Form.Label>
                <Controller
                name="body"
                control={control}
                defaultValue={''}
                render={({ field }) => 
                <Form.Control as='textarea' rows={10} {...field} />}
                />               
            </Form.Group>
            {/* 附件 */}
            <Form.Group className='my-3' controlId="attachment" >
                <Form.Label>添加附件</Form.Label>
                <Controller
                name="attachment"
                control={control}
                render={({ field }) => <Form.Control type='file' {...field} disabled/>}
                />
            </Form.Group>
            
            {/* 提交 */}
            <Button className='my-3' variant="primary" type="submit">提交</Button>
        </Form>
    )
}

export default SendMailForm
