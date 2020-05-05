import * as React from "react";
import Month from "../containers/MonthContainer";
import ReminderModal from "../containers/ReminderModalContainer";
import {firstSundayOfGridBy, getMonthVerboseBy} from "../utils/utils";
import NextMonthButton from "../containers/NextMonthButton";
import PreviousMonthButton from "../containers/PreviousMonthButtonContainer";
import AddReminderButton from "../containers/AddReminderButtonContainer";

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

    render() {
        const monthVerbose = getMonthVerboseBy(this.props.month);
        const firstSunday = firstSundayOfGridBy(this.props.month);
        return (
            <div style={calendarStyle}>
                <div style={calenderTitleStyle}>
                    <div style={titleStyle}><h2>{monthVerbose}</h2></div>
                    <ReminderModal/>
                    <PreviousMonthButton/>
                    <NextMonthButton/>
                </div>

                <Month firstSunday={firstSunday} reminders = {[]} month={this.props.month} />
            </div>

        );
    }
}

export  default Calendar;
