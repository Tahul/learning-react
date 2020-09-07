import React from 'react'

export default class Incrementor extends React.Component {
  static defaultProps = {
    step: 1,
  }

  constructor(props) {
    super(props)

    this.state = {
      n: this.props.start,
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }))
  }

  decrement() {
    this.setState((state, props) => ({ n: state.n - props.step }))
  }

  render() {
    return (
      <div>
        Le nombre actuel est: {this.state.n}
        <div>
          <button onClick={this.increment.bind(this)}>Add 1</button>
        </div>
        <div>
          <button onClick={this.decrement.bind(this)}>Remove 1</button>
        </div>
      </div>
    )
  }
}
