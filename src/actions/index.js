import axios from 'axios';

import {
    FETCH_USER,
    SUBMIT_SURVEY,
    FETCH_SURVEYS
} from './types';

const completeFetchUser = data => ({ type : FETCH_USER, payload : data });

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current-user');
    dispatch(completeFetchUser(res.data));
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type : FETCH_USER, payload : res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    dispatch(completeFetchUser(res.data));
    history.push('/surveys');
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch({
        type : FETCH_SURVEYS,
        payload : res.data
    });
};