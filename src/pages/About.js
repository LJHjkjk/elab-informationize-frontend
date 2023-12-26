import React, { useState } from 'react';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import config from '../config';

function About(){
    return(
      <>
      <ImageUpload/>
      </>
    )
}
export default About;


const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div>
          <h4>Preview:</h4>
          <img src={image} alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};
