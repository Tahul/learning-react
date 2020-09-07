import React from 'react'
import FormComponent from './components/FormComponent'
import ManualIncrementor from './components/ManualIncrementor'
import TimeIncrementor from './components/TimeIncrementor'

/* 01 - DISCOVERY
 *
 * Following Grafikart's walkthrough on React principles (episodes 1 to 10)
 *
 */

export default () => {
  return (
    <div>
      <ManualIncrementor start={0} />

      <TimeIncrementor start={0} />

      <FormComponent />
    </div>
  )
}
