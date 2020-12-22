import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Tabs from './Tabs' //api link is sometimes down, so use this
import './index.css';


const url = 'https://course-api.netlify.app/api/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    // const reponse = await fetch(url);
    // const newJobs = await reponse.json();
    const newJobs = Tabs

    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>
          {/* Loading... */}
          </h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div style={{padding: '100px 40px 200px 40px'}}>
      <div className="title2">
        <h2>experience</h2>
        <div className="underline2"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      
    </div>
  );
}

export default App;
