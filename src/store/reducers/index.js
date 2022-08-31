import { combineReducers } from 'redux';
import { modalReducer } from './modal.reducer';
import { modeReducer } from './mode.reducer';

export default combineReducers({
  modalReducer,
  modeReducer
});
