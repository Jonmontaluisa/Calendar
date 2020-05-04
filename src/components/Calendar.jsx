import * as React from "react";
import Month from "../containers/MonthContainer";
import ReminderModal from "../containers/ReminderModalContainer";
import {firstSundayOfGridBy, getMonthVerboseBy} from "../utils/utils";

const calendarStyle = {
    height: '100vh',
    margin: 'auto'
};
const calenderTitleStyle = {
    display: 'flex',
    flexdirection: 'row',
    padding: '1em',
    height: '5%'

}
const titleStyle = {
    width: '75%'
}
const buttonStyle = {
    width: '20%'
}
class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    month =4
    monthVerbose = getMonthVerboseBy(4);
    firstSunday = firstSundayOfGridBy(this.month);
    render() {
        return (
            <div style={calendarStyle}>
                <div style={calenderTitleStyle}>
                    <div style={titleStyle}><h2>{this.monthVerbose}</h2></div>
                    <ReminderModal/>
                    <button style={buttonStyle}>create a new Reminder</button>
                </div>

                <Month firstSunday={this.firstSunday} reminders = {[]} month={this.month} />
            </div>

        );
    }
}

export  default Calendar;
