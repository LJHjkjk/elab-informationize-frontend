import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { RequireLogin } from '../Login';

//科中日历
function ElabCalendarUI(){
    return(
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    )
}
function ElabCalendar(){
  return(
      <RequireLogin
      notlogin={<p>请登陆</p>}
      logined={<ElabCalendarUI/>}
      />
  )
}

export default ElabCalendar