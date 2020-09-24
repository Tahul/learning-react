import React from 'react'
import Column from './components/Column'
import FlexGrid from './components/FlexGrid'
import SimpleGrid from './components/SimpleGrid'

export default () => {
  return (
    <div>
      <h2 className="text-2xl">
        <span role="img" aria-label="composition">
          🧪
        </span>
        &nbsp;Composition
      </h2>

      <h4 className="py-2 text-xl">
        <span role="img" aria-label="children">
          👶
        </span>
        &nbsp;Children inheritance
      </h4>

      <FlexGrid>
        <Column>Hello 1</Column>
        <Column>Hello 2</Column>
        <Column>Hello 3</Column>
        <Column>Hello 4</Column>
        <Column>Hello 5</Column>
        <Column>Hello 6</Column>
      </FlexGrid>

      <h4 className="py-2 text-xl">
        <span role="img" aria-label="children">
          🧪
        </span>
        &nbsp;Props inheritance
      </h4>

      <SimpleGrid left={<div>Hello Left</div>} right={<div>Hello Right</div>} />
    </div>
  )
}
