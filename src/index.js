import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { UserProvider, useUserContext } from './context/UserContext'



import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);



