import React, { useState } from 'react';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';


function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // 在这里处理上传逻辑，可以使用 Fetch API 或其他库
    // 例如，使用 FormData 对象发送文件到服务器
    const formData = new FormData();
    formData.append('image', selectedImage);

    // 发送到服务器的示例代码
    fetch('YOUR_UPLOAD_API_URL', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Upload success:', data);
        // 处理上传成功的逻辑
      })
      .catch(error => {
        console.error('Upload error:', error);
        // 处理上传失败的逻辑
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>上传</button>
    </div>
  );
}



const FileUploadForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('file', data.file);

      const response = await fetch('YOUR_UPLOAD_API_URL', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      // 处理上传结果
      console.log(result);
    } catch (error) {
      console.error('上传失败:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>选择文件：</label>
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              onChange={(e) => {
                field.onChange(e.target.files[0]);
              }}
            />
          )}
        />
      </div>

      <button type="submit">提交</button>
    </form>
  );
};
function About(){
    return(
      <>
        <FileUploadForm/>
      </>
    )
}
export default About;