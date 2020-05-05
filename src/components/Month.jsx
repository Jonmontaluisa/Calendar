import * as React from "react";
import Week from "./Week";
import WeekHeader from "./WeekHeader";
import {addDays, sortRemindersInWeeklyPeriods, sundaysOfGrid } from '../utils/utils';
const monthStyle = {
    alignItems: 'center',
    margin: '1em',
    height: '80%'
};
class Month extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const sundays = sundaysOfGrid(this.props.month);
        console.log('MONTH', sundays)
        const reminders = this.props.reminders;
        const remindersList = Object.values(reminders);
        const sorted = sortRemindersInWeeklyPeriods(remindersList, this.props.month);
        const weeks = sorted.map((weeklyReminders, index)=> <Week sunday={sundays[index]} reminders={weeklyReminders}></Week>)

        return (
            <div style={monthStyle} >
                <WeekHeader/>
                {weeks}
            </div>

        );
    }
}

export  default Month;
