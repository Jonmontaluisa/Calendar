import * as React from "react";
import Reminder from "./Reminder";
import {sortByDate} from "../utils/utils";

const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: "80px"
};
class ReminderList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sortedList = sortByDate(this.props.remindersList);
        const list = sortedList.map((reminder) => <div><Reminder {...reminder}></Reminder></div>)
        return (
            <div style={listStyle}>
                {list}
            </div>

        );
    }
}

export default ReminderList;
