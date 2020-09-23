import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

/**
 * Return a Celsius temperature in Fahrenheit
 * @param fahrenheit Temperature in Fahrenheit
 * @returns {number}
 */
const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9
}

/**
 * Return a Fahrenheit temperature in Celsius
 * @param celsius Temperature in celsius
 * @returns {number}
 */
const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32
}

/**
 * Return a temperature converted with a temperature converter function
 * @param {Number} temperature The temperature value
 * @param {Function} converter The converter function
 */
const tryConvert = (temperature, converter) => {
  const value = parseFloat(temperature)

  if (Number.isNaN(value)) {
    return 0
  }

  return (Math.round(converter(value) * 100) / 100).toString()
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: 'celsius',
      temperature: 20,
    }

    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
  }

  handleTemperatureChange(scale, temperature) {
    this.setState({
      scale,
      temperature,
    })
  }

  render() {
    const { scale, temperature } = this.state

    const fahrenheit =
      scale === 'fahrenheit'
        ? temperature
        : tryConvert(temperature, toFahrenheit)

    const celsius =
      scale === 'celsius' ? temperature : tryConvert(temperature, toCelsius)

    return (
      <div>
        <TemperatureInput
          scale="celsius"
          temperature={celsius}
          onTemperatureChange={this.handleTemperatureChange}
        />

        <TemperatureInput
          scale="fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={this.handleTemperatureChange}
        />

        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}
