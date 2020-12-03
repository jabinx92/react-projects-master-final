import React from 'react';
import ReactDOM from 'react-dom';
import BirthdayReminders from './components/1-BirthdayReminders/BirthdayReminders';
import reportWebVitals from './reportWebVitals';
import TourProject from './components/2-Tours/TourProject'
import Reviews from './components/3-Reviews/App'
import Accordion from './components/4-Accordion/App'

ReactDOM.render(
  <React.StrictMode>
    <BirthdayReminders />
    <TourProject />
    <Reviews />
    <Accordion />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
