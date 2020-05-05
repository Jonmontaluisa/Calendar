import {connect} from 'react-redux'
import { showModal} from "../actions/actions";
import AddReminderButton from "../components/AddReminderButton";

const mapDispatchToProps = (dispatch) => ({
    dispatchShowModal: () => dispatch(showModal()),
})

export default connect(
    null,
    mapDispatchToProps()
)(AddReminderButton)
