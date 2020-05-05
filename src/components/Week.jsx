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

    render() {
        const daysList = [
            this.props.sunday,
            addDays(this.props.sunday, 1),
            addDays(this.props.sunday, 2),
            addDays(this.props.sunday, 3),
            addDays(this.props.sunday, 4),
            addDays(this.props.sunday, 5),
            addDays(this.props.sunday, 6)
        ];
        const sortedRemindersByDay = sortRemindersInDailyPeriods( this.props.reminders, this.props.sunday);
        const days = sortedRemindersByDay.map((dailyReminders, index)=> <Day day={daysList[index]} reminders={dailyReminders}></Day>)

        return (
            <div style={weekStyle} >
                {days}
            </div>

        );
    }
}

export  default Week;
