import * as React from "react";
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ReminderWrapper = styled.div`
    background: ${props =>  props.color ? props.color : "papayawhip" };
    height: 20px;
    width: auto;
    font-size: 12px;
    text-overflow:clip;
    border-radius: 10%;
    border: 1px;
    border-color:${props =>  props.color ? props.color : "papayawhip" };
    border-style:solid;
    margin:5px;
    `;
const textStyle = {
    width: '100%',
    display: 'block',
    whitespace: 'nowrap',
    height: '15px',
    overflow:'hidden',
    textoverflow:'clip'

}

class Reminder extends React.Component {
    show= true;
    render() {
        return (
            <div>
                <ReminderWrapper color={this.props.color}>
                    <div style={textStyle}> {this.props.city}  {this.props.reminder}</div>
                </ReminderWrapper>
            </div>

        );
    }
}

export  default Reminder;
