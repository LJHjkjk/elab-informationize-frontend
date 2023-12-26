import { useForm ,Controller} from 'react-hook-form';
import { Container, Row, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form} from 'react-bootstrap';

// 文件上传表单
function UploadFile({ describe, name, types = null, submitForm ,onChangeFunction=(e)=>{}}) {
    const { handleSubmit, control } = useForm();

    function submitButton(data) {
      const formData = new FormData();
      formData.append(name, data[name]);
      console.log(data)
      submitForm(formData);
    }
  
    return (
      <form onSubmit={handleSubmit(submitButton)}>
          <Form.Label>{describe}</Form.Label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Form.Control
                type="file"
                accept={types.join(',')}
                onChange={(e) => {
                  field.onChange(e.target.files[0]);
                  onChangeFunction(e.target.files[0])
                }}
              />
            )}
          />
        <br />
        <Button type="submit">提交</Button>
      </form>
    );
}

export default UploadFile