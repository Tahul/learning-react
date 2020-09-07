import React from 'react'
import BoilingVerdict from './BoilingVerdict'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: 100,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    })
  }

  render() {
    const { temperature } = this.state

    return (
      <div>
        <div className="mb-4">
          <label className="font-bold" htmlFor="celsius">
            <span role="img" aria-labelledby="hot">
              🌡
            </span>
            &nbsp; Température (en Celsius)
          </label>

          <input
            className="block border-2 border-blue-400 rounded-lg px-2 py-1 outline-none focus:outline-none"
            type="text"
            id="celsius"
            value={temperature}
            onChange={this.handleChange}
          />
        </div>

        <BoilingVerdict celsius={parseFloat(temperature) || 0} />
      </div>
    )
  }
}
