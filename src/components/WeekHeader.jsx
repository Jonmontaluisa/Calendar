import * as React from "react";

const weekHeaderStyle = {
    display: 'flex',
    width: '100%',
    height: '5%',
    backgroundColor:'papayawhip'
};
const dayHeaderStyle = {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: '0.5px',
    width: '14.29%',
    padding: '7px'
}


class WeekHeader extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div style={weekHeaderStyle}>
                <div style={dayHeaderStyle}>Sun</div>
                <div style={dayHeaderStyle}>Mon</div>
                <div style={dayHeaderStyle}>Tue</div>
                <div style={dayHeaderStyle}>Wed</div>
                <div style={dayHeaderStyle}>Thu</div>
                <div style={dayHeaderStyle}>Fri</div>
                <div style={dayHeaderStyle}>Sat</div>
            </div>
        );
    }
}

export default WeekHeader;
