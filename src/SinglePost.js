// Code to display Single Post
// Importing React, useContext from react.
// Importing LoginContext from App.js.

import React, { useContext } from 'react';
import { LoginContext } from './App';

// Create a SinglePost component. Use the useContext hook to consume the LoginContext context.
// Display the value of the LoginContext context in the console.
// Return a div element with an h3 element that displays the text "Single Post".

const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>
      <h3>Single Post</h3>
    </div>
  )
}

export default SinglePost;
