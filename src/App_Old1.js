// Learn React Hooks by building a counter application

import React, { useState, useEffect } from 'react'

// Define the App component having a counter, name and age state
// The counter state will be incremented on button click
// The name state will be updated as user types in the input field
// The age state is a static value
// Display the counter, name and age state value

// Use the useState hook to define the counter, name and age state
const App = () => {
  const [details, setDetails] = useState({
    counter: 0,
    name: "",
    age: 55
  });

// Use the useEffect hook to update the document title dynamically with the counter state value
useEffect(() => {
    document.title = `You clicked ${details.counter} times`;
}, [ details.counter ]);

// Define a function increment to increment the counter state value
function increment() {
    setDetails({
      ...details,
      counter: details.counter + 1
    });
}

// Return the JSX to display the counter, name and age state value
// Display an input field to update the name state
// Display the name, age and counter state value on button click

  return (
    <div>
        <h2> Counter: {details.counter}</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
        <h2> Name: {details.name}</h2>
        <h2> Age: {details.age}</h2>
        <h2>App Component</h2>
 
        <h1>{details.name} having age {details.age} has clicked {details.counter} times</h1>
        <button hover onClick={increment} >Increment</button>
    </div>
  )
}

export default App

