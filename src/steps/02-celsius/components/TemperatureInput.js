import React from 'react'

const scaleNames = {
  celsius: 'Celsius',
  fahrenheit: 'Fahrenheit',
}

export default class TemperatureInput extends React.Component {
  static defaultProps = {
    scale: 'celsius',
    onTemperatureChange: (temperature) => console.log,
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(this.props.scale, e.target.value)
  }

  render() {
    const { scale, temperature } = this.props
    const scaleName = scaleNames[this.props.scale]

    return (
      <div className="mb-4">
        <label className="font-bold" htmlFor={scale}>
          <span role="img" aria-labelledby="hot">
            🌡
          </span>
          &nbsp; Température (en {scaleName})
        </label>

        <input
          className="block px-2 py-1 border-2 border-blue-400 rounded-lg outline-none focus:outline-none"
          type="text"
          id={scale}
          name={scale}
          onChange={this.handleChange}
          onClick={this.handleChange}
          value={temperature}
        />
      </div>
    )
  }
}
