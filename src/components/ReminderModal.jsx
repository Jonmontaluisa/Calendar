import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {createReminder} from "../actions/actions";
import PropTypes from 'prop-types';
import {uniqueID} from "../utils/utils";

const entryStyle = {
    height: '20px',
    padding: '5px',
    margin: '5px'
}
class ReminderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            setIsOPen: false,
            city: 'Quito',
            date: '2020-05-04',
            time: "15:20",
            reminder: 'Edit your reminder',
            color: 'papayawhip'
        }

        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeReminder = this.handleChangeReminder.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.validateReminderLength = this.validateReminderLength.bind(this);

    }

    showModal = () => { this.setState({isOpen: true})} ;

    hideModal = () => { this.setState( {isOpen:false})}
    handleSubmit(event){

        console.log('statemodal',this.state)
        event.preventDefault();

        if(!this.validateReminderLength()){
            return false;
        }else{
            this.props.dispatchReminder({
                id: uniqueID(),
                reminder: this.state.reminder,
                date: new Date(this.state.date + 'T' + this.state.time + ':00Z'),
                city: this.state.city,
                color: this.state.color
            });
            this.hideModal();
        }


    }
    handleChangeCity(event) {
        this.setState({city: event.target.value});
    }

    handleChangeReminder(event) {
        this.setState({reminder: event.target.value});
    }
     handleChangeDate (event) {
        console.log('===>',event.target.value);
        this.setState({date: event.target.value});
     }
    handleChangeTime(event) {
        this.setState({time: event.target.value});
    }

    handleChangeColor(event) {
        this.setState({color: event.target.value});
    }
    validateReminderLength() {
        if (this.state.reminder.length >30){
            alert('Reminder must be shorter than 30 characters');
            return false;
        }
        return true
    }

    render() {
        return (

            <div >
                <button onClick={this.showModal}>Add a Reminder</button>
                <Modal show={this.state.isOpen}
                       onHide={this.hideModal}
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       autoFocus={true}
                >
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <form name='ModalForm' onSubmit={this.handleSubmit}>
                            <div style={entryStyle}>
                                <label>
                                    City:
                                    <input type="text" value={this.state.city} onChange={this.handleChangeCity} />
                                </label>
                            </div>
                           <div style={entryStyle}>
                               <label htmlFor="day">Day: </label>
                               <input  type= "date" value={this.state.date} onChange={this.handleChangeDate} ></input>

                           </div>

                            <div style={entryStyle}>
                                <label htmlFor="day">Time: </label>
                                <input  type= "time" value={this.state.time} onChange={this.handleChangeTime} ></input>

                            </div>

                            <div style={entryStyle}>
                                <label>Reminder: </label>
                                <input name='ReminderInput' type="text" value={this.state.reminder} onChange={this.handleChangeReminder} ></input>
                            </div>

                            <div>
                                <label htmlFor="favcolor">Color:</label>
                                <input type="color" value={this.state.color} onChange={this.handleChangeColor} ></input>
                            </div>


                            <input type="submit" value="Submit" />
                        </form>
                    </Modal.Body>
                </Modal>
            </div>


        );
    }


}
ReminderModal.propTypes = {
    dispatchReminder: PropTypes.func,
}

export  default ReminderModal;
