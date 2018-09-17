import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from './auth';
import surveys from './survey';

export default combineReducers({
    auth,
    surveys,
    form : reduxForm
});

