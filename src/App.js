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

// Main app display
function App() {
  return (
    <div className="App">
      {/* Current step: Composition */}
      <Composition />
    </div>
  )
}

export default App
