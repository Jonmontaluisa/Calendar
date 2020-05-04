import * as React from "react";
import Week from "./Week";
import WeekHeader from "./WeekHeader";
import {addDays, sortRemindersInWeeklyPeriods} from '../utils/utils';
const monthStyle = {
    alignItems: 'center',
    margin: '1em',
    height: '80%'
};
class Month extends React.Component {
    constructor(props) {
        super(props);
        this.remindersList = []
    };
    firstSunday = this.props.firstSunday;

    week = {
        firstSunday:this.props.firstSunday,
        secondSunday: addDays(this.firstSunday,7),
        thirdSunday: addDays(this.firstSunday,14),
        fourthSunday: addDays(this.firstSunday,21),
        fifthSunday: addDays(this.firstSunday,28),
        sixthSunday: addDays(this.firstSunday,35)
    };
    sundaysList = [
        this.firstSunday,
        this.week.secondSunday,
        this.week.thirdSunday,
        this.week.fourthSunday,
        this.week.fifthSunday,
        this.week.sixthSunday,
    ]
    month = 4;

    render() {
        console.log('MONTH', this.props)
        const reminders = this.props.reminders;
        const remindersList = Object.values(reminders);
        const sorted = sortRemindersInWeeklyPeriods(remindersList, this.month);
        const weeks = sorted.map((weeklyReminders, index)=> <Week sunday={this.sundaysList[index]} reminders={weeklyReminders}></Week>)

        return (
            <div style={monthStyle} >
                <WeekHeader/>
                {weeks}
            </div>

        );
    }
}

export  default Month;
