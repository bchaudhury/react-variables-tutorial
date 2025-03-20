// Learn about React createContext() and useContext() hooks.
// Learn how to use the createContext() function to create a context.
import React, {createContext} from 'react';

// Import the MainComponent component.
import MainComponent from './components/MainComponent';

// Create a context called LoginContext. Export the LoginContext context.
export const LoginContext = createContext();

// Create the App component. Provide the LoginContext.Provider component with a value of true.
// Render the MainComponent component inside the LoginContext.Provider component.
// Display the MainComponent component inside the App component.

const App = () => {
  return (
    <LoginContext.Provider value={true}>
        <div>
            <MainComponent/>
        </div>
    </LoginContext.Provider>

  )
}

export default App;
