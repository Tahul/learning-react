import React from 'react'

const scaleNames = {
  celsius: 'Celsius',
  fahrenheit: 'Fahrenheit',
}

/**
 * Return a Celsius temperature in Fahrenheit
 * @param fahrenheit
 * @returns {number}
 */
const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9
}

/**
 * Return a Fahrenheit temperature in Celsius
 * @param celsius
 * @returns {number}
 */
const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32
}

export default class TemperatureInput extends React.Component {
  static defaultProps = {
    scaleName: 'celsius',
    onTemperatureChange: (temperature) => console.log,
  }

  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { scale, temperature } = this.props
    const scaleName = scaleNames[this.props.scale]
    let value = scale === 'fahrenheit' ? toFahrenheit(temperature) : temperature

    return (
      <div className="mb-4">
        <label className="font-bold" htmlFor={scale}>
          <span role="img" aria-labelledby="hot">
            🌡
          </span>
          &nbsp; Température (en {scaleName})
        </label>

        <input
          className="block border-2 border-blue-400 rounded-lg px-2 py-1 outline-none focus:outline-none"
          type="text"
          id={scale}
          name={scale}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    )
  }
}
