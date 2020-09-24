/* eslint no-unused-vars: 0 */
/* To avoid linter errors; we keep track of all steps as unused vars here. */

// Core imports:
import React from 'react'
// Styling:
import './css/index.css'

// Steps summaries components:
import Discovery from './steps/01-discovery' // Step 01 - Discovery
import Celsius from './steps/02-celsius' // Step 02 - Celsius/Fahrenheit workshop
import Composition from './steps/03-composition' // Step 03 - Composition w/ React
import ThinkingInReact from './steps/04-thinking-in-react' // Step 04 - Thinking in React

// Main app display
function App() {
  return (
    <div className="App">
      {/* Current step: Thinking In React */}
      <ThinkingInReact />
    </div>
  )
}

export default App
