import {connect} from 'react-redux'
import {createReminder} from "../actions/actions";
import Month from '../components/Month'

export const mapStateToProps = (state) => ({
    reminders: state.reminders
})


const mapDispatchToProps = (dispatch) => ({
    dispatchReminder: (rem) => dispatch(createReminder(rem))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Month)
