import {connect} from 'react-redux'
import ReminderModal from "../components/ReminderModal";
import {createReminder} from "../actions/actions";

export const mapStateToProps = (state) => ({

})
export const mapDispatchToProps = (dispatch) => ({
    dispatchReminder: (reminder) => dispatch(createReminder(reminder))


})
export default connect(
    null,
    mapDispatchToProps)
(ReminderModal)
