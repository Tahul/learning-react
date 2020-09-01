import React from "react";

export default class Incrementor extends React.Component {
    static defaultProps = {
        step: 1
    }

    constructor(props) {
        super(props);

        this.timer = null

        this.state = {
            n: this.props.start
        }
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState((state, props) => ({n: state.n + props.step}))
    }

    render() {
        return <div>
            Le nombre actuel est: { this.state.n }
        </div>
    }
}
