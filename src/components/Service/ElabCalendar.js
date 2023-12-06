import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';


//科中日历
function ElabCalendar(){
    return(
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    )
}
export default ElabCalendar