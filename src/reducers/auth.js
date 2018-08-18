
import { FETCH_USER } from '../actions/types';

export default (state = {}, action) => {
    console.log('action : ', action);

    switch (action.type) {
        case FETCH_USER:
            return state;
        default:
            return state;
    }
}