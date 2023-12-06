import { useForm ,Controller} from 'react-hook-form';
import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';


function MaterialInfoForm({submitForm,control}){
    return(
        <Form onSubmit={submitForm} >
            {/* 名称 */}
            <Form.Group >
                <Form.Label>名称：</Form.Label>
                <Controller
                name="name"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>
            {/* 价格 */}
            <Form.Group >
                <Form.Label>价格：</Form.Label>
                <Controller
                name="price"
                control={control}
                render={({ field }) => 
                <Form.Control type='number'{...field} />}
                />               
            </Form.Group>            
            {/* 数量 */}
            <Form.Group >
                <Form.Label>数量：</Form.Label>
                <Controller
                name="number"
                control={control}
                render={({ field }) => 
                <Form.Control type='number' {...field} />}
                />               
            </Form.Group>            
            {/* 安全值 */}
            <Form.Group >
                <Form.Label>安全值：</Form.Label>
                <Controller
                name="security_value"
                control={control}
                render={({ field }) => 
                <Form.Control type='number' {...field} />}
                />               
            </Form.Group>            
            {/* 资产来源 */}
            <Form.Group >
                <Form.Label>资产来源：</Form.Label>
                <Controller
                name="source"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>           
             {/* 类型 */}
            <Form.Group >
                <Form.Label>类型：</Form.Label>
                <Controller
                name="type"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>            
            {/* 条形码 */}
            <Form.Group >
                <Form.Label>条形码：</Form.Label>
                <Controller
                name="bar_code"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>             
            {/* 位置 */}
            <Form.Group >
                <Form.Label>位置：</Form.Label>
                <Controller
                name="position"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>             
            {/* 备注 */}
            <Form.Group >
                <Form.Label>备注：</Form.Label>
                <Controller
                name="remark"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>             
            {/* 入库日期 */}
            <Form.Group >
                <Form.Label>入库日期：</Form.Label>
                <Controller
                name="warehousing_date"
                control={control}
                render={({ field }) => 
                <Form.Control type='date' {...field} />}
                />               
            </Form.Group>
            {/* 状态 */}
            <Form.Group >
                <Form.Label>状态：</Form.Label>
                <Controller
                name="state"
                control={control}
                render={({ field }) => 
                <Form.Control {...field} />}
                />               
            </Form.Group>       

            {/* 提交 */}
            <Button className='my-3' variant="primary" type="submit">提交</Button>
        </Form>
    )
}


export default MaterialInfoForm