import {connect} from 'react-redux'
import {increaseMonth, decreaseMonth} from "../actions/actions";
import Calendar from '../components/Calendar'

export const mapStateToProps = (state) => ({
    month: state.month
})

export default connect(
    mapStateToProps
)(Calendar)
