import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserProvider.js';
import BookingProvider from './context/BookingProvider.js';

ReactDOM.render(
    <BrowserRouter>
        <BookingProvider>
        <UserProvider>
            <App />
        </UserProvider>
        </BookingProvider>
    </BrowserRouter>,
document.getElementById('root'));

