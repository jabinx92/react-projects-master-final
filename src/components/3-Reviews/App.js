import React from 'react';
import Review from './Review';
import './index.css';

function App() {
  return (
    <main>
      <section className='container1'>
        <div className='title1'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
