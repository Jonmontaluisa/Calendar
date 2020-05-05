import {connect} from 'react-redux'
import NextMonthButton from "../components/NextMonthButton";
import {increaseMonth} from "../actions/actions";

export const mapStateToProps = (state) => ({

})
export const mapDispatchToProps = (dispatch) => ({
    dispatchIncreaseMonth: () => dispatch(increaseMonth())
});

export default connect(
    null,
    mapDispatchToProps)
(NextMonthButton)
