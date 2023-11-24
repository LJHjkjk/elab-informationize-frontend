import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Row,Figure,Image, Col,Card,Table,FloatingLabel,Button,Badge, Modal, Form, Accordion, ListGroup} from 'react-bootstrap';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: new Date(), // you can set the start date based on your requirements
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};


const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

const MyComponent = () => {
  const [data, setData] = useState(['ll','ddd','aa']);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {/* Render your data using filteredData */}
    </div>
  );
};


function About(){
    return(
      <>
      <Calendar/>
      <MyComponent/>
      <Image src="https://img2.baidu.com/it/u=496494351,3684413482&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" thumbnail />
      </>
    )
}
export default About;