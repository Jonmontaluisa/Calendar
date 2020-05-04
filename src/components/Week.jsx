import * as React from "react";
import styled from 'styled-components'
import Day from "./Day";
import {addDays, sortRemindersInDailyPeriods} from '../utils/utils';

const weekStyle = {
    display: 'flex',
    justifyContent:'flex-end',
    width: '100%',
    height: '20%'
};
class Week extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    sunday = this.props.sunday;

    week = {
        sunday: this.props.sunday,
        monday:addDays(this.sunday,1),
        tuesday: addDays(this.sunday,2),
        wednesday: addDays(this.sunday,3),
        thursday: addDays(this.sunday,4),
        friday: addDays(this.sunday,5),
        saturday: addDays(this.sunday,6)
    };
    daysList = [
      this.week.sunday,
      this.week.monday,
      this.week.tuesday,
      this.week.wednesday,
      this.week.thursday,
      this.week.friday,
      this.week.saturday
    ];



    render() {
        const sortedRemindersByDay = sortRemindersInDailyPeriods( this.props.reminders, this.props.sunday);
        const days = sortedRemindersByDay.map((dailyReminders, index)=> <Day day={this.daysList[index]} reminders={dailyReminders}></Day>)

        return (
            <div style={weekStyle} >
                {days}
            </div>

        );
    }
}

export  default Week;
