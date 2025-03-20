import React from 'react';

// import SinglePost from './SinglePost';
import SinglePost from  '../SinglePost';

// Call the SinglePost component from the MainComponent component.
const MainComponent = () => {
  return (
    <div>
      <h3>Main Component</h3>
      <SinglePost />
    </div>
  )
}

export default MainComponent;
