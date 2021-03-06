/* To avoid linter errors; we keep track of all steps as unused vars here. */
/* eslint no-unused-vars: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */
// @ts-nocheck

// Core imports:
import React, { FunctionComponent } from 'react'
// Styling:
import './css/index.css'

// Steps summaries components:
import Discovery from './steps/01-discovery' // Step 01 - Discovery
import Celsius from './steps/02-celsius' // Step 02 - Celsius/Fahrenheit workshop
import Composition from './steps/03-composition' // Step 03 - Composition w/ React
import ThinkingInReact from './steps/04-thinking-in-react' // Step 04 - Thinking in React
import Hooks from './steps/05-hooks' // Step 05 - Hooks

// Main app display
const App: FunctionComponent = () => {
  return (
    <div className="App">
      {/* Current step: Hooks */}
      <Hooks />
    </div>
  )
}

export default App
