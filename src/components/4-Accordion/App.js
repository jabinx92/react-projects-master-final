import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './index.css';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="main1">
      <div className='container2'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
