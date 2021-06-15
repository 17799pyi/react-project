import {
    RESET_ALL_2_INITIAL_STATE,
    HISTORY_TASK_ALL,
    LESSON_TASK_ALL,
    LOGIN_TASK_ALL
}from '../constants';

const initialState = {
    userId: "7a3b9ba8d3cd48d697a5029e12958e4a",
    lesson_task_all: []
};

export function customerFrontEnd(state = initialState, action) {
    switch (action.type) {
        case RESET_ALL_2_INITIAL_STATE:
            return { ...initialState }
        case HISTORY_TASK_ALL:
            return {
                ...state,
                history_task_all: action.payload
            }
        case LESSON_TASK_ALL:
            return {
                ...state,
                lesson_task_all: action.payload
            }
        case LOGIN_TASK_ALL:
            return {
                ...state,
                login_task_all: action.payload
            }    
        default:
            return state;
    }
}