import React from "react";
import FieldComponent from "./FieldComponent";

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Yaël"
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    submit(event) {
        // Prevent submitting at DOM level; such as `.prevent` modifier on Vue syntax
        event.preventDefault();


    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <FieldComponent key="testField" label="Test field" defaultValue="Test value" />
            </form>
        )
    }
}
