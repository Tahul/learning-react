// Core imports:
import React from 'react';
// Styling:
import './App.css';
import FormComponent from "./components/FormComponent";

// Example components:
// import TimeIncrementor from "./components/TimeIncrementor";
// import ManualIncrementor from "./components/ManualIncrementor";


function App() {
  return (
    <div className="App">
        { /* <ManualIncrementor start={0} /> */ }

        { /* <TimeIncrementor start={0} /> */ }

        <FormComponent />
    </div>
  );
}

export default App;
