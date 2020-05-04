import { connect } from 'react-redux'
import Reminder from "../components/Reminder";

const mapStateToProps = state => {
    return {
        id: state.reminders.id
    }
}

const ReminderContainer = connect(mapStateToProps)(Reminder)
