import * as React from "react";
import styled from 'styled-components'
import ReminderList from "./RemiderList";

const Wrapper = styled.div`
    background: ${props => props.color ? props.color : "white"};
    `;
const dayStyle = {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: '0.5px',
    width: '14.29%',
}

class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const day = this.props.day;
        const todayNumber = day.getDate();
        return (
            <div role={'button'} style={dayStyle}>
                <Wrapper color={this.props.color}>
                    <div>{todayNumber}</div>
                </Wrapper>
                <ReminderList remindersList={this.props.reminders}></ReminderList>
            </div>
        );
    }
}

export default Day;
