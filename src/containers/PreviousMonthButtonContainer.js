import {connect} from 'react-redux'
import PreviousMonthButton from "../components/PreviousMonthButton";
import {decreaseMonth} from "../actions/actions";

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({
    dispatchDecreaseMonth: () => dispatch(decreaseMonth())
});

export default connect(
    null,
    mapDispatchToProps)
(PreviousMonthButton)
