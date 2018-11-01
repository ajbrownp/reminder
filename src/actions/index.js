import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

// action to add a reminder
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

// action to delete a reminder
export const deleteReminder = (id) =>  {
  const action = {
    type: DELETE_REMINDER,
    id
  }
 console.log('deleting in actions/index.js', action);
  return action;
}
