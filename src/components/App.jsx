import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';
import moment from 'moment';
// import { bindActionCreators } from 'redux';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

// add reminder helper method
  addReminder() {
      // console.log('this', this);
      this.props.addReminder(this.state.text, this.state.dueDate);
  }

// delete reminder helper method
 deleteReminder(id) {
    this.props.deleteReminder(id);
 }

// rendering all reminders
  renderReminders() {
    const { reminders } = this.props;
    // console.log('reminders', reminders);
    return (
      <ul className='list-group col-md-4 col-sm-10'>
        {
          reminders.map (reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment (new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    // console.log('this.props', this.props);
    return (
      <div className='App'>
        <div className='title'>
            Reminder App
        </div>
        <div className='form-inline reminder-form'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='I have to ...'
              onChange={event => this.setState({text: event.target.value})}
            />
            <input
              className='form-control'
              type='datetime-local'
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// function mapDispatchtoProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
// }

export default connect(mapStateToProps, { addReminder, deleteReminder }) (App);
