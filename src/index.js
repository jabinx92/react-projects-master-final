import React from 'react';
import ReactDOM from 'react-dom';
import BirthdayReminders from './components/1-BirthdayReminders/BirthdayReminders';
import reportWebVitals from './reportWebVitals';
import TourProject from './components/2-Tours/TourProject';
import Reviews from './components/3-Reviews/App';
import Accordion from './components/4-Accordion/App';
import Menu from './components/5-Menu/App';
import Tabs from './components/6-Tabs/App';
import Slider from './components/7-Slider/App';
import LoremIpsum from './components/8-LoremIpsum/App';
import ColorPicker from './components/9-ColorPicker/App';
import GroceryBud from './components/10-GroceryBud/App'

ReactDOM.render(
  <React.StrictMode>
    <BirthdayReminders />
    <TourProject />
    <Reviews />
    <Accordion />
    <Menu />
    <Tabs />
    <Slider />
    <LoremIpsum />
    <ColorPicker />
    <GroceryBud />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals - link
reportWebVitals();
