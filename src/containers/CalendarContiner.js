import {connect} from 'react-redux'
import Calendar from '../components/Calendar'

export const mapStateToProps = (state) => ({
    month: state.month
})

export default connect(
    mapStateToProps
)(Calendar)
