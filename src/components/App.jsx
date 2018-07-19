import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
// import { bindActionCreators } from 'redux';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder() {
      // console.log('this', this);
      this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    // console.log('reminders', reminders);
    return (
      <ul className='list-group col-md-4 col-sm-10'>
        {
          reminders.map (reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div>{reminder.text}</div>
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

export default connect(mapStateToProps, { addReminder }) (App);