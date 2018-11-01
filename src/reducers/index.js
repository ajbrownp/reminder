import { ADD_REMINDER, DELETE_REMINDER } from '../constants';
import { bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    text,
    dueDate,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter( reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');

  switch(action.type) {
    // case to add reminder
    case ADD_REMINDER:
      reminders = [ ...state, reminder(action)];// "..state" spread and array ES6
      bake_cookie('reminders', reminders);
      return reminders;

    // case to delete reminder
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;

    default:
      return state;
  }
}

export default reminders;
