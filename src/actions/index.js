import axios from 'axios';

import FETCH_USER from 'types';

const fetchUser = () => dispatch => axios.get('/api/current-user')
    .then(res => dispatch({ type : FETCH_USER, payload : res}));
