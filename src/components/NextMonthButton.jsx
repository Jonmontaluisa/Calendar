import * as React from "react";

class NextMonthButton extends React.Component {
    constructor(props) {
        super(props);
        this.increaseMonth = this.increaseMonth.bind(this);
    }
    increaseMonth () {
        this.props.dispatchIncreaseMonth();
    }

    render() {
        return (
            <button onClick={this.increaseMonth}>NEXT</button>
        );
    }
}

export default NextMonthButton;
