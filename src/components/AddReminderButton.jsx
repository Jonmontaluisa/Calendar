import * as React from "react";

class AddReminderButton extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }
    showModal () {
        this.props.dispatchShowModal();
    }

    render() {
        return (
            <button onClick={this.showModal}>ADD REMINDER</button>
        );
    }
}

export default AddReminderButton;
