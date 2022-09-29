import React from 'react';
import './Answers.css'

const Answers = () => {
    return (
        <div className='answers'>
            <h2>1. How does react work?</h2>
            <p>- ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            <h2>2. What is the difference between props and state?</h2>
            <p>- Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h2>3. What does useEffect do beside data load?</h2>
            <p>- Perform DOM updates, Data fetching or call imperative API. </p>
        </div>
    );
};

export default Answers;