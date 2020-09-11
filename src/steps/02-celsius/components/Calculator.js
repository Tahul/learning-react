import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: 20,
    }

    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
  }

  handleTemperatureChange(temperature) {
    this.setState({
      temperature,
    })
  }

  render() {
    const { temperature } = this.state

    return (
      <div>
        <TemperatureInput
          scale="celsius"
          temperature={temperature}
          onTemperatureChange={this.handleTemperatureChange}
        />

        <TemperatureInput
          scale="fahrenheit"
          temperature={temperature}
          onTemperatureChange={this.handleTemperatureChange}
        />

        <BoilingVerdict celsius={parseFloat(temperature) || 0} />
      </div>
    )
  }
}
