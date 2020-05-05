import * as React from "react";

class PreviousMonthButton extends React.Component {
    constructor(props) {
        super(props);
        this.decreaseMonth = this.decreaseMonth.bind(this);
    }
    decreaseMonth () {
        this.props.dispatchDecreaseMonth();
    }

    render() {
        return (
            <button onClick={this.decreaseMonth}>PREVIOUS</button>
        );
    }
}

export default PreviousMonthButton;
