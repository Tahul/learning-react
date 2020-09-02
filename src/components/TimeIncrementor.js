import React from "react";

export default class Incrementor extends React.Component {
    static defaultProps = {
        step: 1
    }

    constructor(props) {
        super(props);

        this.state = {
            n: this.props.start,
            timer: null
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer() {
        this.setState({
            timer: window.setInterval(this.tick.bind(this), 1000)
        });
    }

    stopTimer() {
        window.clearInterval(this.state.timer);

        this.setState({
            timer: null
        });
    }

    tick() {
        this.setState((state, props) => ({n: state.n + props.step}));
    }

    toggle() {
        if (this.state.timer) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    render() {
        return <div>
            Le nombre actuel est: { this.state.n }

            <p>
                <button onClick={this.toggle.bind(this)}>
                    { this.state.timer ? "Pause" : "Play" }
                </button>
            </p>
        </div>
    }
}
