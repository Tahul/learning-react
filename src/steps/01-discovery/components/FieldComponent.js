import React from 'react'

export default class FieldComponent extends React.Component {
  static defaultProps = {
    key: 'defaultKey',
    label: 'Label',
    type: 'text',
    defaultValue: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.defaultValue,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.key}>{this.props.label}</label>
        <input
          name={this.props.key}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
